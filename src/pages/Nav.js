import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Popover from "../components/popover/Popover";
import linkedin from "../assets/linkedin.png";
import GitHub from "../assets/gitImg.png";
import Facebook from "../assets/fbImg.png";

import { SocialButton } from "../components/popover/button";
// import { BrowserRouter } from 'react-router-dom'

export const Block = (props) => {
  const buttons = [
    {
      link: "www.linkedin.com",
      title: "linkedin",
      image: "./assets/linkedin.png",
    },
  ];
  return (
    <div id="nav-bar" role="toolbar" aria-label="Toolbar with div groups">
      <div class="btn-group" role="group" aria-label="First group">
        <div id="portBtn">
          <Link to="/portfolio">Portfolio</Link>
        </div>

        <div>
          <Link className="navbar-brand" to="/">
            About Me
          </Link>
        </div>

        <div>
          <Popover />
        </div>
        <div className="socialButton">
          <a
            href="https://www.linkedin.com/in/erik-dono/"
            target="_blank"
            title="LinkedIn"
            class="btn btn-sm"
          >
            <img class="siteImg" src={linkedin} />
          </a>
        </div>
        <div className="socialButton">
          <a
            href="https://github.com/ErikDono/"
            target="_blank"
            title="GitHub"
            class="btn btn-sm"
          >
            <img class="siteImg" src={GitHub} />
          </a>
        </div>
        <div className="socialButton">
          <a
            href="https://www.linkedin.com/in/erik-dono/"
            target="_blank"
            title="LinkedIn"
            class="btn btn-sm"
          >
            <img class="siteImg" src={Facebook} />
          </a>
        </div>
      </div>
    </div>
  );
};

{
  /* <BrowserRouter path="/Portfolio" component={Portfolio} /> */
}

export const Navi = (props) => <Block />;

export default Navi;
