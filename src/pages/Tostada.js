import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Popover from "../components/popover/Popover"


// import { BrowserRouter } from 'react-router-dom'

const Tostada = ({ children }) => {
    const [show, toggleShow] = useState(false);

    return (
        <div style={{ marginLeft:"28%", marginTop:"20px"}}>
            {!show && <Button onClick={() => toggleShow(true)}>Thanks for visiting</Button>}
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto"></strong>Hello there
                </Toast.Header>
                <Toast.Body>
                    This is a work in progress! I just started react, and am trying to get bootstrap to work. This is a construction site, so please be mindful of where you're stepping!
        <span role="img" aria-label="tada">
                        🎉
        </span>

                </Toast.Body>
            </Toast>
        </div>
    );
};


export default Tostada;
