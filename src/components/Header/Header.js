import React, {useEffect} from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory()
    function logout() {
            if (localStorage.getItem('user')){
                localStorage.clear()
                history.push('/login')
            }
    }

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto myNavbar">
                    {
                        localStorage.getItem('user') ?
                            <>
                                <Link to='/profile'>Home</Link>
                                <Link to='/allfiles'>All Files</Link>
                                <Link to='/myfiles'>My Files</Link>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }
                </Nav>
                {
                    localStorage.getItem('user') ?
                        <>
                            <Nav>
                                <button onClick={logout}>Logout</button>
                            </Nav>
                        </>
                        :
                        null
                }


            </Navbar>
        </>
    )
}

export default Header