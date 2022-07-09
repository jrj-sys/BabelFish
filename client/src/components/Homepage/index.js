import React from "react";
import "./style.css";
import { Card, Avatar, CardActionArea } from "@mui/material";
import Drawer from "../Drawer";

import avatarImgOne from "../../assets/images/THIS.jpg";
import avatarImgTwo from "../../assets/images/THIS.jpg";

function Homepage() {
  return (
    <div>
      <h2>conversation</h2>

      <div className="conversation">
        <Drawer />
        <Card className="conversationCard">
          <CardActionArea>
            <div className="convo-title">
              <Avatar
                alt=""
                src={avatarImgOne}
                className="convo-avatar"
              ></Avatar>
              <p className="convo-name">Paul</p>
              <p className="convo-read">4:20pm</p>
            </div>
            <p className="convo-message">Message!</p>
          </CardActionArea>
        </Card>
      </div>

      <div className="conversation">
        <Card className="conversationCard">
          <CardActionArea>
            <div className="convo-title">
              <Avatar
                alt=""
                src={avatarImgTwo}
                className="convo-avatar"
              ></Avatar>
              <p className="convo-name">Paul</p>
              <p className="convo-read">4:20pm</p>
            </div>
            <p className="convo-message">Message!</p>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Homepage;
