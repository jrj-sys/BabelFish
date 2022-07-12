import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Well, this is embarassing...</h1>
        <h1>
          <span role="img" aria-label="Blushed Face Emoji">
          ☺️
          </span>
        </h1>
        <p>404 Page Not Found</p>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
