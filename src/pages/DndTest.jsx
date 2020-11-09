import React from 'react';
import styled from 'styled-components';
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Card, Form, FormControl, ButtonToolbar } from 'react-bootstrap'


const Wrapper = styled.div`
    width: 60%;
    padding: 32px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
`;


const Item = styled.div`
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    paddingTop: '5px',
    width: '250px',
    height: '400px',
    margin: '32px'
}

export default class DndTest extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
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
                    </Navbar.Collapse>
                </Navbar>

                <Wrapper>
                    <Col>
                        <h1>To do</h1>
                        <Droppable id="dr1" style={droppableStyle}>
                            <Draggable id={"item1"} style={{ margin: '8px' }}>
                                <Item>Some text 1</Item>
                            </Draggable>
                        </Droppable>
                    </Col>
                    <Col>
                    <h1>In progress</h1>
                        <Droppable id="dr2" style={droppableStyle}>
                            <Draggable id={"item2"} style={{ margin: '8px' }}>
                                <Item>Some text 2</Item>
                            </Draggable>
                        </Droppable>
                    </Col>

                    <Col>
                    <h1>Done</h1>
                        <Droppable id="dr3" style={droppableStyle}>
                            <Draggable id={"item3"} style={{ margin: '8px' }}>
                                <Item>Some text 3</Item>
                            </Draggable>
                        </Droppable>
                    </Col>

                </Wrapper>


                <Navbar id="footerNav" fixed="bottom" bg="light" expand="lg">
                    <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="https://github.com/teu100" target="_blank">GitHub</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}