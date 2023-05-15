// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import axios, { Axios } from 'axios'
// import {useNavigate} from "react-router-dom";
// import '../App.css'
// import Swal from 'sweetalert2'
// const SignUpPage=()=> {
//     const [email, setemail] = useState()
//     const [name, setname] = useState()
//     const [password, setpassword] = useState()
//     const [loginStatus, setloginState] = useState()
//     const [registerStatus, setregisterState] = useState()
//     const navigate = useNavigate();
//     const register = (e) => {
//         e.preventDefault();
//         axios.post("http://52.172.10.66:3001/register", {
//             email: email,
//             name: name,
//             password: password
//         }).then((response) => {
//             console.log(response);
//             if (response.status===200) {
//                 // setloginState(response.data.message)
//                 setregisterState("Account created successfully!")
//                 Swal.fire(
//                     'Logged in successfully',
//                     'You clicked the button!',
//                     'success'
//                   )
//                 navigate("/Welcome")
//             }
//             else {
//                 setloginState("Account created successfully!")
//             }
//         }).catch((err) => {
//             console.log(err)})
//     }

//     return (
//         <div className="text-center m-5-auto">
//             <h2>Join us</h2>
//             <h5>Create your personal account</h5>
//             <form action="/home">
//                 <p>
//                     <label>Username</label><br />
//                     <input type="text" name="first_name" onChange={(e) => { setname(e.target.value) }} required />
//                 </p>
//                 <p>
//                     <label>Email address</label><br />
//                     <input type="email" name="email" onChange={(e) => { setemail(e.target.value) }} required />
//                 </p>
//                 <p>
//                     <label>Password</label><br />
//                     <input type="password" name="password" onChange={(e) => { setpassword(e.target.value) }} required />
//                 </p>
//                 <p>
//                     <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
//                 </p>
//                 <p>
//                     <button id="sub_btn" type="submit" onClick={register}>Register</button>
//                 </p>
//             </form>
//             <footer>
//                 <p><Link to="/">Back to Homepage</Link>.</p>
//             </footer>
//         </div>
//     )

// }
// export default SignUpPage;
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios, { Axios } from 'axios'
import {useNavigate} from "react-router-dom";
import '../App.css'

const SignUpPage=()=> {
    const [email, setemail] = useState()
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [loginStatus, setloginState] = useState()
    const [registerStatus, setregisterState] = useState()
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const navigate = useNavigate();


    const register = (e) => {
        e.preventDefault();
        if(Validate()){
            axios.post("http://52.172.10.66:3001/register", {
                email: email,
                name: name,
                password: password
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    // setloginState(response.data.message)
                    setregisterState("Account created successfully!")
                    if (Validate()) {
                        navigate("/Welcome")
                    }
                    else {
                        alert("Error");
                    }
                }
                else {
                    setloginState("Account created successfully!")
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const Validate = () => {
        if (email === "" || password === "" || name === "") {
            if (!email) {
                setIsEmailValid(false);
            }
            else{
                setIsEmailValid(true);
            }
              if (!password) {
                setIsPasswordValid(false);
              }
              else {
                setIsPasswordValid(true);
            }
              if(!name){
                setIsNameValid(false);
              }
              else {
                setIsNameValid(true);
            }
        }
        else{
            return true;
        }
    }

    return (

        <div className="regOuterDiv">
        <div className="loginInnerDiv">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" className='form'>
                <p>
                    <label>Username<br />
                    <input className='form-input' type="text" name="first_name" onChange={(e) => { setname(e.target.value) }} required /><br></br>
                    {!isNameValid && <span style={{ color: 'red' }}>name is mandatory</span>}
                    </label>
                </p>
                <p>
                    <label>Email address<br />
                    <input className='form-input' type="email" name="email" onChange={(e) => { setemail(e.target.value) }} required /><br></br>
                    {!isEmailValid && <span style={{ color: 'red' }}>email is mandatory</span>}
                    </label>
                </p>
                <p>
                    <label>Password<br />
                    <input className='form-input' type="password" name="password" onChange={(e) => { setpassword(e.target.value) }} required /><br></br>
                    {!isPasswordValid && <span style={{ color: 'red' }}>password is mandatory</span>}
                    </label>              
                </p>
                <p>
                    <input className='form-input' type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a className='term-link' href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="login_btn" type="submit" onClick={register}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/" className='linkMove'>Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )

}
export default SignUpPage;
