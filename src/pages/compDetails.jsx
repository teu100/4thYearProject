import React, {Component} from "react";

import { Container,  Navbar, Nav, NavDropdown, Button, Card, Form, ProgressBar, ButtonToolbar } from 'react-bootstrap'

import logo from './download.png';



export class homePage extends Component {

    constructor(props){
        super(props);
        this.state={comp:[]}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44384/api/company')
        .then(response=> response.json())
        .then(data => 
            {
            this.setState({comp:data})
            }
            );
    }


    render(){

        const {comp} = this.state;
        
    return(

        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Task Managment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/task">Tasks</Nav.Link>
                        <Nav.Link href="/users">User</Nav.Link>
                        <Nav.Link href="/companyDetails">Company Details</Nav.Link>

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
                <h1>Company Details </h1>
                <div class="CompanyDetails">
                <div class="companyText">


                        
                        {comp.map(comp=>
                        <div>
                            <dl>
                            <dt>Company Name</dt>
                            <dd>{comp.compName}</dd>
                            <dt>address Line 1</dt>
                            <dd>{comp.addressLine1}</dd>
                            <dt>address Line 2</dt>
                            <dd>{comp.addressLine2}</dd>
                            <dt>City/Town</dt>
                            <dd>{comp.cityName}</dd>
                            <dt>State</dt>
                            <dd>{comp.county}</dd>
                            <dt>Country</dt>
                            <dd>{comp.country}</dd>
                            <dt>Eircode</dt>
                            <dd>{comp.eircode}</dd>
                            </dl>
                        </div>
                        )}
                        


                    </div>
                    
                    <div class="companyPicture">
                        <img src={logo} alt="companyIcon"/>
                    </div>
                </div>  

                
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

export default homePage;