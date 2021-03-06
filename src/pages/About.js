import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Media
} from "reactstrap";
import "./style.css"
import Pic from "../assets/EandB.png"
import Farm from "../assets/farm.jpg"

function About() {
    return (
      <div styles={{ backgroundImage: `url(${Farm})` }}>
        <div id="aboutCard">
          <Card>
            <CardHeader>A little about me...</CardHeader>
            <CardBody>
              <br></br>
              <div id="cardMod">
                <CardText>
                  My careers in banking, gaming, and education have shown me
                  that the less usable your product is, the less likely that
                  your users will have the experience that you assume them to
                  have! From financing a home to running a program, every user
                  expects a high degree of usability. That is why I have made it
                  my goal as a student of the UPENN coding academy to learn how
                  to deploy code that is not only clean and readable, but is
                  impeccably user friendly. I am still learning, but I plan on
                  making all of my websites as smooth as possible with each
                  iteration. Please feel free to contact me with any ideas you
                  have to make this portfolio page any cleaner, or more user
                  friendly! Please click around, and visit the different pages
                  of the site! “Change is the law of life. And those who look
                  only to the past or the present are certain to miss the
                  future.” - JFK
                </CardText>
              </div>
            </CardBody>

            <Media id="pic" src={Pic}></Media>
          </Card>
        </div>
      </div>
    );

    }

export default About;