import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "../components/Dashboard";






export class DashBoardPage extends Component {

    constructor(props){
        super(props);
        this.state={}
    }


    render() {
        return (
            <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center" style ={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Dashboard />
                </div>
            </Container>
            </AuthProvider>
            
        )
    }
}

export default DashBoardPage;