import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Popover from "../components/popover/Popover";
import linkedin from "../assets/linkedin.png";
import GitHub from "../assets/gitImg.png";
import Facebook from "../assets/fbImg.png";
import docImg from "../assets/docImg.png";

import { SocialButton } from "../components/popover/button";
// import { BrowserRouter } from 'react-router-dom'

export const Block = (props) => {
  return (
    <div id="nav-bar" role="toolbar" aria-label="Toolbar with div groups">
      <div class="btn-group" role="group" aria-label="First group">
        <div className="navMod">
          <Link to="/portfolio">Portfolio</Link>
        </div>

        <div className="navMod" >
          <Link className="navbar-brand" to="/">
            About Me
          </Link>
        </div>
        <div>
          <Link className="navbar-brand" to="/resume">
            <img className="siteImg" src={docImg} />
          </Link>
        </div>

        <div className> 
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
