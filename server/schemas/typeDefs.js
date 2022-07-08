// import graphQL
const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    contacts: [User]
  }

  type Query {
    users: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User 
  }
`;

module.exports = typeDefs;