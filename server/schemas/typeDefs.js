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

  type Conversation {
    _id: ID
    members: [User]
    messages: [Message]
  }

  type Message {
    _id: ID
    sender: String
    text: String
  }

  type Query {
    users: [User]
    conversations: [Conversation]
    messages: [Message]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, preferredLang: String!): User 
    addConversation(receiverId: String!, senderId: String!): Conversation
    addMessage(conversationId: String!, sender: String!, text: String!): Message
  }
`;

module.exports = typeDefs;