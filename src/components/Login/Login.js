import React, {useEffect, useState} from 'react'
import Header from "../Header/Header";
import {Form, Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()


    useEffect(() => {
        if (localStorage.getItem('user')){
            history.push('/profile')
        }
    },[])

    const handleForm = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => localStorage.setItem('user',JSON.stringify(json)));
        setEmail('')
        setPassword('')
        history.push('/profile')
    }

    return (
        <div>
            <Header/>

            <h3>Please login for more</h3>

            <Form onSubmit={handleForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="dark" type="submit" className='formButton'>
                    Login
                </Button>
            </Form>

        </div>
    )
}

export default Login