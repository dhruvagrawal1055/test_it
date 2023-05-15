import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios, { Axios } from 'axios'
import "../App.css"
import Navigate from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import{useHistory} from "react-router-dom";

export default function SignInPage() {
    const [email, setemail] = useState()
    const [username, setname] = useState()
    const [password, setpassword] = useState()
    const [loginStatus, setloginState] = useState()
    const naviagte = useNavigate();
    const [registerStatus, setregisterState] = useState()
    const Login = (e) => {
        e.preventDefault();
        // const history = useHistory();
        axios.post("http://localhost:3001/login", {
            email: email,
            name: username,
            password: password
        }).then((response) => {
            console.log(response)
            if (response) {
                setloginState(response.data.message)
                console.log(response.data[0].Email);
                // history.push('/Welcome')
                naviagte('/Welcome');
            }
            else {
                setloginState("Account created successfully!")
            }
        })
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" onChange={(e) => { setemail(e.target.value) }}   required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" onChange={(e) => { setpassword(e.target.value) }}required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={Login}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
