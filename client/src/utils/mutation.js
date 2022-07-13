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
  mutation addUser($username: String!, $email: String!, $password: String!)  {
	addUser(username: $username, email: $email, password: $password) {
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
  mutation postMessage($user: String!, $content: String!) {
    postMessage(user: $user, content: $content) {
      id
      user
      content
    }
  }
`