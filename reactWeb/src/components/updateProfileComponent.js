import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'



export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading , setLoading] = useState(false)
    const history = useHistory()




    function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords does not match')
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !==  currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/dashboard')
        }).catch(()=>{
            setError('Failed to update account')
        }).finally(()=>{
            setLoading(false)
        })

        try{
            setError("")
            setLoading(true)
            //await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')

        }catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile Update</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Leave it blank to keep the same password"/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave it blank to keep the same password"/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Update Profile</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/dashboard">Cancel</Link>
            </div>
        </>
    )
}

