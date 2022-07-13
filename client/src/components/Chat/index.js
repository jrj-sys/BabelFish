import React, { useState } from 'react'
import './style.css'
import { Avatar, TextField } from '@mui/material'
import { useQuery, useMutation, useSubscription } from '@apollo/client'
import { POST_MESSAGE } from '../../utils/mutation'
import { GET_MESSAGES } from '../../utils/queries'
import { MESSAGES_SUBSCRIPTION } from '../../utils/subscriptions'
import { Container, Row, Col, FormInput, Button } from 'shards-react'

// import avatarImgTwo from "../../assets/images/imgExamples/ed-panopio-img-2036.jpg"

const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES, {
    pollInterval: 500,
  });

  if (!data) {
    return null;
  }

  return (
    <>
      {data.messages.map(({ id, user: messageUser, content }) => (
        <div
          style={{
            display: 'flex',
            justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
            paddingBottom: '1em'
          }}
        >
          {user !== messageUser && (
           <Avatar />
          )}
          <div
            style={{
              background: user === messageUser ? "#58bf56" : "#e5e6ea",
              color: user === messageUser ? "white" : "black",
              padding: "1em",
              borderRadius: "1em",
              maxWidth: "60%"
            }}
          >
            {content}
          </div>
        </div>
      ))}
    </>
  )
}  

const Chat = () => {
  const [state, setState] = useState({
    user: '62ce4f6a9f66a4e1fcb9c4af',
    content: ''
  })

  const [postMessage] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (state.content.length > 0) {
      postMessage({
        variables: state
      })
    }
    setState({
      ...state,
      content: '',
    })
  }

  return (
    <Container>
      <Messages user={state.user} />
      <Row>
        <Col xs={2} style={{ padding: 0}}>
          <FormInput 
            label='User'
            value={state.user}
            onChange={(evt) => setState({
              ...state,
              user: evt.target.value})}
          />
        </Col>
        <Col xs={8}>
          <FormInput 
            label='Content'
            value={state.content}
            onChange={(evt) => setState({
              ...state,
              content: evt.target.value})
            }
            
            onKeyUp={(evt) => {
              if (evt.keyCode === 13) {
                onSend();
              }
            }}
          />
        </Col>
        <Col xs={2} style={{ padding: 0 }}>
          <Button onClick={() => onSend()} style={{ width: '100%' }}>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  )
}



export default Chat;
