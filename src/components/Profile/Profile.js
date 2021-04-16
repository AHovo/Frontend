import React,{useEffect} from 'react'
import {useHistory} from "react-router-dom";

const Profile = () => {
    const history = useHistory()
    useEffect(() => {
        if (localStorage.getItem('user')){
            history.push('/profile')
        }
    },[])
    let user = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            <h1>Welcome {user && user.name ? user.name : null}</h1>

        </div>
    )
}

export default Profile