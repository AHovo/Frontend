import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom";
import Header from "../Header/Header";
import {Button, Form} from "react-bootstrap";

const Register = () => {
    useEffect(() => {
        if (localStorage.getItem('user')){
            history.push('/profile')
        }
    },[])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [name, setName] = useState('')
    const history = useHistory()

    const handleForm = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            password: password
        }
        console.log(user);
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => localStorage.setItem('user',JSON.stringify(json)));

        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setName('');
        history.push('/profile')
    }

    return (
        <div>
            <Header />
            <h1>Register Page</h1>

            <Form onSubmit={handleForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password Confirm</Form.Label>
                    <Form.Control value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} type="password" placeholder="Password Confirm" />
                </Form.Group>

                <Button variant="dark" type="submit" className='formButton'>
                    Register
                </Button>
            </Form>

        </div>
    )
}

export default Register