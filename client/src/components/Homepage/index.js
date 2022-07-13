import React from "react";
import "./style.css";
import { Card, Avatar, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Homepage() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/message/{user._id}`;
    navigate(path);
  };

  return (
    <div>
      <h2>conversation</h2>

      {/* map each conversation */}
      <Card className="convo-card" style={{ backgroundColor: "lightgrey" }}>
        <CardActionArea onClick={routeChange}>
          {/* {conversation.map(() => (
            <div className="convo-title">
              <Avatar alt="" src={user.profilePic} className="convo-avatar"></Avatar>
              <p className="convo-name">{user.username}</p>
              <p className="convo-read">{conversation.createdAt}</p>
            </div>
              // may need to remove this if we cant get it to work
              <p className="convo-message">{message.messageText}</p>
          ))} */}
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Homepage;
