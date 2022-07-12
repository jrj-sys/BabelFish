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
    hostId: String
    guestId: String
    messages: [Message]
  }
  
  type Message {
    _id: ID
    messageId: String
    messageBody: String
    writtenBy: String
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
    messages(writtenBy: String): [Message]
  }

  type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!, preferredLang: String!): Auth
    startConversation(hostId: String, guestId: String): Conversation
    addMessage(messageBody: String!, writtenBy: String!): Message
    addContact(contactId: ID!): User
  }
`;

module.exports = typeDefs;