import React, { useState, useEffect } from 'react'
// import React hooks, useSubscription for persistent GraphQL updates
import { useQuery, useMutation, useSubscription } from '@apollo/client'
import { POST_MESSAGE } from '../../utils/mutation'
import { GET_MESSAGES } from '../../utils/queries'
import { MESSAGES_SUBSCRIPTION } from '../../utils/subscriptions'
import { Avatar, TextField } from '@mui/material'
// import { Container, Row, Col, FormInput, Button } from 'shards-react'
import Chat from '../Chat'
import './style.css'
// SocketIO 
import io from 'socket.io-client'
// connect io to React 
const socket = io.connect('http://localhost:3001');

const ChatApp = () => {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };


  return (
    <div className="Chat">
      {!showChat ? (
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input type="text" placeholder="Username" 
        onChange={(e) => {setUsername(e.target.value)}}/>
        <input type="text" placeholder="Room ID" 
        onChange={(e) => {setRoom(e.target.value)}}/>
        <button onClick={joinRoom}>Join A Room</button>
      </div>
      )
      : (
      <Chat socket={socket} username={username} room={room}/>
      )}
    </div>
  )
}

export default ChatApp;
