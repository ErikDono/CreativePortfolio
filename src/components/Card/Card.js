import React from 'react';
import card from "react-bootstrap"
import { Card, Button, CardTitle, CardText, Row, Col, ButtonGroup, Media } from 'reactstrap';
import "./style.css";
import repos from "../../utils/seed"



const NewCard = () => {
    return (
      <div class="card">
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
              sm="1"
              style={{ marginLeft: "25%", marginBottom: "20%" }}
            >
              <div class="container">
                <Media class="image" src={repos.image}></Media>
                <div class="text">
                  <div class="overlay">
                    <Card body>
                      <CardTitle>{repos.name}</CardTitle>
                      <br></br>
                      <br></br>
                      <div>
                        <CardText>{repos.desc}</CardText>
                        <ButtonGroup vertical>
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

export default NewCard;