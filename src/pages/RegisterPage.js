import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios, { Axios } from 'axios'
import '../App.css'
export default function SignUpPage() {
    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [loginStatus, setloginState] = useState()
    const [registerStatus, setregisterState] = useState()
    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {
            email: email,
            name: name,
            password: password
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                setloginState(response.data.message)

            }
            else {
                setloginState("Account created successfully!")
            }
        })
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br />
                    <input type="text" name="first_name" onChange={(e) => { setname(e.target.value) }} required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" onChange={(e) => { setemail(e.target.value) }} required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" onChange={(e) => { setpassword(e.target.value) }} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={register}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
