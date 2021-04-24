import React, { Component } from "react";
import { Container, Table } from 'react-bootstrap'
import {Button, ButtonToolbar} from 'react-bootstrap'
import {EditUser} from '../components/EditUser';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';




export class usersPage extends Component {

    constructor(props){
        super(props);
        this.state={emps:[],isLoaded: false,editEmpShow : false}
    }

    componentDidMount(){
        this.getList();
        }

        getList(){
            fetch("https://4thyearprojectapi20210323220948.azurewebsites.net/api/Employee")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  emps: result
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }



    deleteEmp(employeeID){
        if(window.confirm('Are you sure you want to delete this user?')){
            fetch('https://4thyearprojectapi20210323220948.azurewebsites.net/api/Employee?id='+employeeID,{
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
        this.getList();
    }



    


    render() {
        const {emps, error, isLoaded} = this.state;
        const {employeeID, lastName, compRole,email} = this.state;
        let editEmpClose =() => this.setState({editEmpShow:false})

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div><h1>Loading...</h1></div>;
          } else {
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
        )}
    }
}

export default usersPage;