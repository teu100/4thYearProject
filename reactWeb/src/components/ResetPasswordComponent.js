import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'



export default function ResetPasswordComponent() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading , setLoading] = useState(false)



    async function handleSubmit(e){
        e.preventDefault()

        try{
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check inbox for instructions to reset password')
        }catch{
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset password</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Reset</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Log in</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    )
}