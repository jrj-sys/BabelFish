const express = require('express');
const path = require('path');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth')
const { GraphQLServer, PubSub } = require('graphql-yoga')
// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const PORT = process.env.PORT || 3001;

// initiate an ApolloServer object and pass in our schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { authMiddleware },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({embed: true})],
  playground: true
});

const app = express();

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
    app.listen(PORT, () => {
      console.log(`BabelFish server running on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
};

// async function to start the server
startApolloServer(typeDefs, resolvers);
