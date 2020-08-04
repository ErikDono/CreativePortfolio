import React from 'react';
import card from "react-bootstrap"
import { Card,  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, Button, CardTitle, CardText, Row, Col, ButtonGroup, Media } from 'reactstrap';
import "./style.css";
import repos from "../../utils/seed"



const PrjCard = () => {
    return (
      <div >
        {/*
        WAS USING THIS TO EDIT THE BELOW< AS IT WORKS AS INTENDED <div class="container">
          <Media class="image" src={passPic}></Media>
          <div class="overlay">
            <div class="text">
              {repos.map((repos) => (
                <Card>
                  <CardText>{repos.name}</CardText>
                </Card>
              ))}
            </div>
          </div>
        </div> */}
        <Row>
          {repos.map((repos) => (
            <Col
              md="6"
              col
              sm="2"
              style={{marginBottom: "10%" }}
            >
              <div class="container">
                <Media class="image" src={repos.image}></Media>
                <div class="text">
                  <div class="overlay">
                    <Card body>
                      <CardTitle>{repos.name}</CardTitle>
                      <div>
                        <CardText>{repos.desc}</CardText>
                        <ButtonGroup vertical style={{marginLeft:"30%"}}>
                          <Button href={repos.link}>Click to Visit App</Button>
                          <Button href={repos.github}>
                            Click to Visit the GitHub{" "}
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default PrjCard;