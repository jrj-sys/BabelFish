const express = require('express');
const cors = require('cors');
const http = require('http');
const db = require('./config/connection')
const { typeDefs, resolvers } = require('./schemas')
const { Server }  = require('socket.io')
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth')
const { ApolloServerPluginLandingPageGraphQLPlayground 
} = require('apollo-server-core');

// set PORT for production PORT or 30001
const PORT = process.env.PORT || 3001;

// initiate app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// cors allows special properties on io server
app.use(cors());
// turn app into an http server for web socket 
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

// io connection functions (1:1 implementation with front end)
io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected.`);

  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined Room: ${room}`)
  })

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('received_message', data)
  })

  // on disconnect
  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected.`)
  })
})

// initiate an ApolloServer object and pass in our schema
const GraphQLServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({embed: true})],
  playground: true,
  cache: 'bounded'
});

const startApolloServer = async (typeDefs, resolvers) => {
  await GraphQLServer.start();
  // integrate the Apollo server with Express (http) app as middleware
  GraphQLServer.applyMiddleware({ app });

  db.once('open', () => {
    server.listen(PORT, () => {
      console.log(`BabelFish server running on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${GraphQLServer.graphqlPath}`)
    })
  })
};

// async function to start the GraphQL server
startApolloServer(typeDefs, resolvers);

