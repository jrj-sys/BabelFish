import React from 'react'
import './style.css'
import { Button, Avatar, TextField } from '@mui/material'

// import avatarImgTwo from "../../assets/images/imgExamples/ed-panopio-img-2036.jpg"

function Chatting({ own }) {
    return (
        <div>
            <div className='messageAvatar'>
                <Avatar
                    // src={avatarImgTwo}
                    alt=''
                    sx={{
                        width: '56px',
                        height: '56px'
                    }}
                />
            </div>

            <div className='message'>
                <div className='messageTop'>
                    <p className='messageText'>This is going to be a long message to see how far it can take this to the edge</p>
                </div>
                <div className='messageBottom'> 1 hour ago</div>
            </div>

            <div className='message own'>
                <div className='messageTop own'>
                    <p className='messageText own'>This is going to be a long message to see how far it can take this to the edge</p>
                </div>
                <div className='messageBottom own'> 1 hour ago</div>
            </div>

      <div className="message">
        <div className="messageTop">
          <p className="messageText">
            This is going to be a long message to see how far it can take this
            to the edge
          </p>
        </div>
        <div className="messageBottom"> 1 hour ago</div>
      </div>

      <div className="message own">
        <div className="messageTop own">
          <p className="messageText own">
            This is going to be a long message to see how far it can take this
            to the edge
          </p>
        </div>
        <div className="messageBottom own"> 1 hour ago</div>
      </div>

      <div className="messageInput">
        <TextField
          multiline
          maxRows={3}
          sx={{
            width: "300px",
          }}
          placeholder="Message..."
        />
        <Button
          variant="contained"
          size="Large"
          color="success"
          sx={{
            width: "100px",
            height: "54px",
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Chatting;
