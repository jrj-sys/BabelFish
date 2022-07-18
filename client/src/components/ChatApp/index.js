import React, { useState, useEffect } from "react";
// import React hooks, useSubscription for persistent GraphQL updates
import { useQuery, useMutation, useSubscription } from "@apollo/client";
import { POST_MESSAGE } from "../../utils/mutation";
import { GET_MESSAGES } from "../../utils/queries";
import { MESSAGES_SUBSCRIPTION } from "../../utils/subscriptions";
import { Avatar, TextField } from "@mui/material";

import Chat from "../Chat";
import "./style.css";
// SocketIO
import io from "socket.io-client";
// connect io to React
const socket = io.connect("https://babelfishapp.herokuapp.com/");

const ChatApp = () => {

  const [nickname, setNickname] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false);


  const joinRoom = () => {
    if (nickname !== '' && room !== '') {

      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  return (
    <div className="Chat">
      {!showChat ? (
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input type="text" placeholder="Nickname" 
        onChange={(e) => {setNickname(e.target.value)}}/>
        <input type="text" placeholder="Room ID" 
        onChange={(e) => {setRoom(e.target.value)}}/>
        <button onClick={joinRoom}>Join A Room</button>
      </div>
      )
      : (
      <Chat socket={socket} nickname={nickname} room={room}/>
      )}
    </div>
  );
};

export default ChatApp;
