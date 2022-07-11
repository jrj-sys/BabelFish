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
    conversationId: String
    senderId: String
    messageText: String
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
    startConversation(hostId: String!, guestId: String!): Conversation
    addMessage(conversationId: String!, sender: String!, text: String!): Message
    addContact(contactId: ID!): User
  }
`;

module.exports = typeDefs;