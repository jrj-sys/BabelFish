import { gql } from '@apollo/client'

export const MESSAGES_SUBSCRIPTION = gql`
  subscription {
    messages {
      id
      user
      content
    }
  }
`