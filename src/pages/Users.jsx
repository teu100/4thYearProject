import React, { Component } from "react";
import { Container, Table } from 'react-bootstrap'
import {Button, ButtonToolbar} from 'react-bootstrap'
import {EditUser} from '../components/EditUser';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';




export class usersPage extends Component {

    constructor(props){
        super(props);
        this.state={emps:[],editEmpShow : false}
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

    deleteEmp(employeeID){
        if(window.confirm('Are you sure you want to delete this user?')){
            fetch('https://localhost:44384/api/employee/'+employeeID,{
                method:'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
            })
            this.componentDidUpdate();
        }
    }

    componentDidUpdate(){
        this.refreshList();
    }

    


    render() {
        const {emps} = this.state;
        const {employeeID, lastName, compRole,email} = this.state;
        let editEmpClose =() => this.setState({editEmpShow:false})

        return (
            <body className="userPage">
            <div > 

                

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
                                <th>Edit</th>
                                <th>Delete</th>
                                
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
                                <td><Button variant="info" onClick= {()=> this.setState({editEmpShow:true, employeeID:emp.employeeID, lastName:emp.lastName,compRole:emp.compRole, email:emp.email }) }><EditIcon/></Button></td>
                                <EditUser 
                                show = {this.state.editEmpShow}
                                onHide = {editEmpClose}
                                empid = {employeeID}
                                emplname = {lastName}
                                comprole = {compRole}
                                empemail = {email}
                                />
                                <td><Button className="mr-2" onClick={()=>this.deleteEmp(emp.employeeID)} variant="danger" ><DeleteForeverIcon/></Button></td>
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