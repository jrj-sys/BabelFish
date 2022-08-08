import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $preferredLang: String!)  {
	addUser(username: $username, email: $email, password: $password, preferredLang: $preferredLang) {
    token
    user {
      _id
      username
      email
      preferredLang
    }
  } 
}
`;

export const POST_MESSAGE = gql`
  mutation postMessage($roomId: String!, $sender: String!, $message: String!, $timestamp: String!, $messageId: String!) {
    postMessage(roomId: $roomId, sender: $sender, message: $message, timestamp: $timestamp, messageId: $messageId) {
      roomId
      sender
      message
      timestamp
      messageId
    }
  }
`;