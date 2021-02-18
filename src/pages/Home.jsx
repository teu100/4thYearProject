import React, {Component} from "react";

import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'




export class homePage extends Component {




    render(){

        

    return(
        <body className="homePage">
        <div>
            <Container>
                <Row>
                    <Col md>
                        <h1 class="h1forProgress">To do</h1>
                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task 1</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                            <ProgressBar variant="success" now={0}/>
                        </Card>

                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
              </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer><ProgressBar variant="success" now={50}/>
                        </Card>

                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task 3</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
              </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer><ProgressBar variant="success" now={100}/>
                        </Card>
                        
                    </Col>

                    <Col>
                        <h1 class="h1forProgress">In progress</h1>
                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task title</Card.Header>
                            <Card.Body>
                                <Card.Text>
                            Task description will go here
              </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                        </Card>
                    </Col>


                    <Col>
                        <h1 class="h1forProgress">Done</h1>
                        <Card className="text-center" style={{ width: '18rem' }} bg="primary" text="white">
                            <Card.Header>Task title</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                Task description will go here
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small >Last updated 3 mins ago(if it was edited)</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <div className="myFooter">
                    <ul>
                        <li><a href="/">Task Managment</a></li>
                        <li><a href="https://github.com/teu100" target="_blank" rel='noreferrer'>GitHub</a></li>
                    </ul>
            </div>
            </div>
            </body>
    )
    }
    
}

export default homePage;