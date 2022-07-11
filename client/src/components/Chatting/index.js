import React from 'react'
import './style.css'
import { Button, TextareaAutosize, Avatar } from '@mui/material'

import avatarImgTwo from "../../assets/images/imgExamples/ed-panopio-img-2036.jpg"

function Chatting({ own }) {
    return (
        <div className='chat'>

            <div className="chat-avatar">
                <Avatar alt="" src={avatarImgTwo}></Avatar>
            </div>

            <div className='chat-messasge'>
                <p className='chat-content'>I wanted to write something really long but didnt know what to write so her is the long a** text to test this thing</p>
            </div>
            <p className='chat-time'>4:20pm</p>

            <div className='chat-own-message'>
                <p className='chat-own-content'>Okay???</p>
            </div>
            <p className='chat-time'>4:20pm</p>

            <div className='chat-messasge'>
                <p className='chat-content'>stop texting me!</p>
            </div>
            <p className='chat-time'>4:20pm</p>

            <div className='chat-input'>
                <TextareaAutosize
                    aria-label="minimum height"
                    maxRows={3}
                    style={{ Width: 300, height: 35 }}
                />
                <Button variant="contained" size="Large" color="success">Send</Button>
            </div>
        </div>
    )
}

export default Chatting