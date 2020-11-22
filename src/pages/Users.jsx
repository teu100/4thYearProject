import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown, Button, Card, Form, FormControl, Table } from 'react-bootstrap'





export class usersPage extends Component {

    constructor(props){
        super(props);
        this.state={emps:[]}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44384/api/employee')
        .then(response=> response.json())
        .then(data => 
            {
            this.setState({emps:data})
            }
            );
    }


    render() {
        const {emps} = this.state;
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

                <Container>
                    <h1>User's Page</h1>
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emps.map(emp=>
                                <tr key = {emp.employeeID}>
                                <td>{emp.employeeID}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                </tr>
                                )}
                        </tbody>


                    </Table>
                </Container>
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
        )
    }
}

export default usersPage;