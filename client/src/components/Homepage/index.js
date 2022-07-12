import React from "react";
import "./style.css";
import { Card, Avatar, CardActionArea } from "@mui/material";
import Drawer from "../Drawer";
import { Link, useNavigate } from 'react-router-dom';

import avatarImgOne from "../../assets/images/THIS.jpg";
import avatarImgTwo from "../../assets/images/THIS.jpg";

function Homepage(userid) {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/message/{userid}`;
    navigate(path);
  }

  return (
    <div>
      <h2>conversation</h2>

      {/* map each conversation */}
      <Card className="convo-card" style={{ backgroundColor: "lightgrey" }}>
        <CardActionArea
          onclick={routeChange}
        >
          <div className="convo-title">
            <Avatar alt="" src={avatarImgOne} className="convo-avatar"></Avatar>
            <p className="convo-name">Paul</p>
            <p className="convo-read">4:20pm</p>
          </div>
          <p className="convo-message">Supp!</p>
        </CardActionArea>
      </Card>

      <Card className="convo-card" style={{ backgroundColor: "lightgrey" }}>
        <CardActionArea>
          <div className="convo-title">
            <Avatar alt="" src={avatarImgTwo} className="convo-avatar"></Avatar>
            <p className="convo-name">Sussy</p>
            <p className="convo-read">1:11pm</p>
          </div>
          <p className="convo-message">Message! 👻</p>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Homepage;
