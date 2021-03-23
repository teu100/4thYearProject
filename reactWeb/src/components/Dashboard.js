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

    function userGreeting(){
        return <h1>Welcome Back</h1>
    }

    function guestGreeting(){
        return <h1>Hello World</h1>
    }

    function Greeting(currentUser){
        if(currentUser !=  null)
        {
            return userGreeting()
        }
        
    }

    function NotLoggedIN(currentUser){
        if(currentUser ==  null)
        {
            return guestGreeting()
        }
    }


    return (
        <>
        {Greeting(currentUser) && <>
        <h1 align="center">Welcome Back</h1>
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
            </>}
            {NotLoggedIN(currentUser) &&
                <>
                <h1 align="center">Log in or Sign up</h1>
                
                    <Link to="/login"><Button className="w-100" type="submit">Log In</Button></Link><p></p>
                    <Link to="/signup"><Button className="w-100" type="submit">Sign Up</Button></Link>
                </>
            }
            
        </>
    )
}