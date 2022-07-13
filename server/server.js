const express = require('express');
const path = require('path');
// import ApolloServer
const { ApolloServer, PubSub } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth')
// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')
const { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { GraphQLWsLink } = require('@apollo/client/link/subscriptions');
const { createServer } = require('http');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require ('graphql-ws/lib/use/ws')

const PORT = process.env.PORT || 3001;

// instance of GraphQLSchema
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const httpServer = createServer(app)

// create a WebSocketServer to use as your subscription server
const wsServer = new WebSocketServer({
  // httpServer
  server: httpServer,
  path: '/graphql'
});

// initiate an ApolloServer object and pass in our schema
const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({embed: true}), 
    ApolloServerPluginDrainHttpServer({ httpServer }), {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          }
        }
      }
    }],
  playground: true,
  cache: 'bounded'
});

// WebSocketServer listening
const serverCleanup = useServer({ schema }, wsServer);

server.installSubscriptionHandlers(httpServer);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/public/')));
// }
// prod vs. dev


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate the Apollo server with Express app as middleware
  server.applyMiddleware({ app });

  db.once('open', () => {
    httpServer.listen(PORT, () => {
      console.log(`BabelFish server running on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
};

// async function to start the server
startApolloServer(typeDefs, resolvers);
