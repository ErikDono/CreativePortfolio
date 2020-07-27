import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Popover from "../components/popover/Popover"
import Linkedin from "../components/Linkedin/Linkedin"

// import { BrowserRouter } from 'react-router-dom'


export const Block = (props) =>

    <ul class="navbar-nav ml-auto">
        <div class="btn-toolbar justify-content-between " role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group" role="group" aria-label="First group">
                <button type="button" id='portBtn' class="btn btn-secondary"><Link to="/Portfolio">Portfolio</Link></button>

                <button type="button" id='abtBtn' class="btn btn-secondary"><Link className="navbar-brand" to="/">
                    About Me</Link></button >
                <button type="button" id="linkBtn" class="btn btn-secondary"><Popover /></button>

                <button type="button" id="linkBtn" class="btn btn-secondary"><a
                    href="https://www.linkedin.com/in/erik-donovan-174a6877/" target="_blank" title="LinkedIn"
                    class="btn btn-sm"><img class='siteImg' src={linkedin} alt="linkedin" /></a></button>


                <button type="button" id='faceBtn' class="btn btn-secondary"><a
                    href="https://www.facebook.com/erik.donovan.33?ref=bookmarks" target="_blank" title="Facebook"
                    class="btn btn-sm"><img class="siteImg" src="../../../assets/fbImg.png" /></a></button>

                <button type="button" id='gitBtn' class="btn btn-secondary"><a href="https://github.com/ErikDono"
                    target="_blank" title="GitHub" class="btn  btn-sm"><img class="siteImg"
                        src="../../../assets/gitImg.png" /></a></button>
            </div >
        </div >
    </ul >

{/* <BrowserRouter path="/Portfolio" component={Portfolio} /> */ }



export const Navi = (props) =>
    <Container>
        <Jumbotron >
            <Nav>
              
                <Block />
            </Nav>
        </Jumbotron >
    </Container>

export default Navi;