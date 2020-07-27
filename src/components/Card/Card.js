import React from 'react';
import card from "react-bootstrap"
import { Card, Button, CardTitle, CardText, Row, Col, ButtonGroup } from 'reactstrap';

import repos from "../../utils/seed"


const NewCard = () => {
    return (
        <div>
         

                {repos.map(repos => (
                    <Row>
                        <Col md="6" col sm="3" style={{ marginLeft: "25%", marginBottom: "17px" }}>
                            <Card body>
                                <CardTitle>{repos.name}</CardTitle>
                                <CardText>{repos.desc}</CardText>
                                <ButtonGroup vertical>
                                <Button href={repos.link}>Click to Visit App</Button>
                                <Button  href={repos.github}>Click to Visit the GitHub </Button>
                                </ButtonGroup>
                            </Card>
                        </Col>
                    </Row>

                ))
                }
          
        </div>

    );
};

export default NewCard;