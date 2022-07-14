import React from "react";
import Jumbotron from "../components/Jumbotron";
import BabelFish from "../assets/images/babelfish.gif";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Well, this is embarassing...</h1>
        <h1>
          <span role="img" aria-label="Gif of BabelFish from HHG2G"></span>
          <img src={BabelFish}
          alt="Gif of BabelFish from HHG2G"
           />
        </h1>
        <p>404 Page Not Found</p>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
