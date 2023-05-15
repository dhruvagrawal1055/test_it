import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios, { Axios } from 'axios'
import "../App.css"
import Navigate from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import{useHistory} from "react-router-dom";

export default function SignInPage() {
    const [email, setemail] = useState("")
    const [username, setname] = useState("")
    const [password, setpassword] = useState("")
    const [loginStatus, setloginState] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const naviagte = useNavigate();
    const [registerStatus, setregisterState] = useState()
    const Login = (e) => {
        e.preventDefault();
        if(Validate()){
            // const history = useHistory();
            axios.post("http://52.172.10.66:3001/login", {
                email: email,
                name: email,
                password: password
            }).then((response) => {
                console.log(response)
                if (response) {
                    setloginState(response.data.message)
                    console.log(response.data[0].Email);
                    // history.push('/Welcome')
                    if (Validate()) {
                        naviagte('/Welcome');
                    }
                }
                else {
                    setloginState("Account created successfully!")
                }
            })
        }
    }
    const Validate = () => {
        if (email === "" || password === "") {
            if (!email.trim()) {
                setIsEmailValid(false);
            }
            else {
                setIsEmailValid(true);
            }
            if (!password.trim()) {
                setIsPasswordValid(false);
            }
            else {
                setIsPasswordValid(true);
            }
            return false;
        }
        else{
            return true;
        }
    }

    return (
        <div className="loginOuterDiv">
        <div className="loginInnerDiv">
            <h2>Sign in to us</h2>
            <form action="/home" className='form'>
                <p>
                    <label >Username or email address<br/>
                    <input className='form-input' type="text" name="first_name" onChange={(e) => { setemail(e.target.value) }}   required /><br></br>
                    {!isEmailValid && <span style={{ color: 'red' }}>Email is mandatory</span>}
                    </label>
                </p>
                <p>
                    <label>Password
                    <Link to="/forget-password" className='forgot-link'><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input className='form-input' type="password" name="password" onChange={(e) => { setpassword(e.target.value) }}required /><br></br>
                    {!isPasswordValid && <span style={{ color: 'red'}}>Password is mandatory</span>}
                    </label>
                </p>
                <p>
                    <button id="login_btn" type="submit" onClick={Login}>Login</button>
                </p>
            </form>
            <footer id="form-footer">
                <p>Or</p><br></br>
                <div className='linkMove'>
                <Link className='linkMove' to="/register" >Create an account</Link><br></br>
                </div>
                <div >
                <Link className='linkMove' to="/" >Back to Homepage</Link>
                </div>
            </footer>
        </div>
        </div>
    )
}
