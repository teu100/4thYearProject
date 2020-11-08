import React from "react";
import Board from '../components/Board'
import CardBox from '../components/CardBox'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, FormControl } from 'react-bootstrap'


const dragAndDropPage = () => {

    return (
        
        <div className="App">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/task">Tasks</Nav.Link>
                        <Nav.Link href="/users">User</Nav.Link>
                        <Nav.Link href="/drag">drag</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">New Task</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <CardBox id="card-1" className="card" draggable="true">
            <Card className="text-center"  bg="primary" text="white">
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
          </CardBox>
        </Board>

        <Board id="board-2" className="board">
          <CardBox id="card-1" className="card" draggable="true">
            <p>Card two</p>
          </CardBox>
        </Board>

      </main>
      <Navbar id="footerNav" fixed="bottom" bg="primary" variant="dark">
                <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/teu100" target="_blank">GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </div>
    )
}

export default dragAndDropPage;