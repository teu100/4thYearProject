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
            <body className="userPage">
            <div > 

                <div className="myNavBarCSS">
                    <ul>
                        <li><a href="/">Task Managment</a></li>
                        <li><a href="/task">Tasks</a></li>
                        <li><a href="/users">User's</a></li>
                        <li><a href="/companyDetails">Company Details</a></li>
                    </ul>
                </div>

                <Container>
                    <h1>User's Page</h1>
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Role</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {emps.map(emp=>
                                <tr key = {emp.employeeID}>
                                <td>{emp.employeeID}</td>
                                <td>{emp.compRole}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                </tr>
                                )}
                        </tbody>


                    </Table>
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

export default usersPage;