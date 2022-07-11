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
    conversations: [Conversation]
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String): User
    conversations: [Conversation]
    messages(username: String): [Message]
  }

  type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!, preferredLang: String!): Auth
    addConversation(receiver: ID!, sender: ID!): Conversation
    addMessage(conversationId: String!, sender: String!, text: String!): Message
    addContact(contactId: ID!): User
  }
`;

module.exports = typeDefs;