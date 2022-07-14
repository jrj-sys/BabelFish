import React, { useState, useEffect } from 'react'
import Auth from '../../utils/auth'
import { v4 as uuidv4 } from 'uuid'
import ScrollToBottom from 'react-scroll-to-bottom'

function Chat({ socket, nickname, room }) {
  const user = Auth.getProfile();
  const { preferredLang } = user.data

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        sender: nickname,
        message: currentMessage,
        preferredLang: preferredLang,
        messageId: uuidv4(),
        timestamp: new Date(Date.now()).getHours() 
        + ":" + 
        new Date(Date.now()).getMinutes()
      };
      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  }

  useEffect(() => {
    const eventListener = (data) => {
        setMessageList((list) => [...list, data]);
    };
    socket.on('received_message', eventListener);

    return () => socket.off('received_message', eventListener);
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Chatting as: {nickname}</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
        {messageList.map((messageContent) => {
          return <div className="message" 
          id={nickname === messageContent.sender ? 'guest' : 'host'}
          key={messageContent.messageId}>
            <div>
              <div className="message-content">
                <p>{messageContent.message}</p>
              </div>
              <div className="message-meta">
                <p id="time">{messageContent.timestamp}</p>
                <p id="author">{messageContent.sender}</p>
              </div>
            </div>
          </div>
        })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input type="text" 
        placeholder="Send something..."
        value={currentMessage}
        onChange={(e) => {setCurrentMessage(e.target.value)}}
        onKeyPress={(e) => {
          e.key === 'Enter' && sendMessage();}}/>
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}



export default Chat


