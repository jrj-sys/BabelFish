// import graphQL
const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    preferredLang: String
    contacts: [User]
  }

  type Message {
    id: ID!
    roomId: String,
    sender: String,
    message: String,
    timestamp: String,
    messageId: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String): User
    messages: [Message]
  }

  type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!, preferredLang: String!): Auth
    postMessage(roomId: String!, sender: String!, message: String!, timestamp: String!, messageId: String!): Message
  }

  type Subscription {
    messages: [Message!]
  }
`;

module.exports = typeDefs;