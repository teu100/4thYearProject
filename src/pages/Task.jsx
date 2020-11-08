import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, FormControl } from 'react-bootstrap'


const taskPage = () => {

    return (
        <div>
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


            <Navbar id="footerNav" fixed="bottom" bg="primary" variant="dark">
                <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/teu100" target="_blank">GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>Task Page</h1>
        </div>
    )
}

export default taskPage;