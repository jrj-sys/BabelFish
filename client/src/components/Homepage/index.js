import React from 'react';
import './style.css'
import { Card, Avatar, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'

import avatarImgOne from "../../assets/images/imgExamples/WIN_20220630_14_33_40_Pro[234].jpg"
import avatarImgTwo from "../../assets/images/imgExamples/ed-panopio-img-2036.jpg"

function Homepage() {
    return (
        <div>
            <h2>conversation</h2>

            <Card className='convo-card' style={{ backgroundColor: "lightgrey" }}>
                <CardActionArea>
                    <div className='convo-title'>
                        <Avatar alt="" src={avatarImgOne} className="convo-avatar"></Avatar>
                        <p className='convo-name'>Paul</p>
                        <p className='convo-read'>4:20pm</p>
                    </div>
                    <p className='convo-message'>Supp!</p>
                </CardActionArea>
            </Card>


            <Card className='convo-card' style={{ backgroundColor: "lightgrey" }}>
                <CardActionArea>
                    <div className='convo-title'>
                        <Avatar alt="" src={avatarImgTwo} className="convo-avatar"></Avatar>
                        <p className='convo-name'>Sussy</p>
                        <p className='convo-read'>1:11pm</p>
                    </div>
                    <p className='convo-message'>Message! 👻</p>
                </CardActionArea>
            </Card>
        </div >
    )
}

export default Homepage;