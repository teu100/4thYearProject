import React, { useState } from 'react'
import {Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"





export default function DashBoard(){
    const [error, setError] = useState("")
    const {currentUser} = useAuth()
    const history = useHistory()



    function handleLogout(){
        setError("")

        try{
            auth.signOut()
            history.push("/login")
        }catch{
            setError("Failed to log out")
        }
    }


    function getCurrentUser(){
        if (currentUser != null){
            return currentUser.email
        }else{
            return ""
        }
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {getCurrentUser()}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                <Button variant="Link" onClick={handleLogout}>Log out</Button>
            </div>
        </>
    )
}