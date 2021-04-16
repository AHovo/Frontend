import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user')){
            history.push('/profile')
        }
    },[])

    return (
        <div>
            <Header/>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home