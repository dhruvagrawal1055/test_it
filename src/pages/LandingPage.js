import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import TypeWriterEffect from 'react-typewriter-effect'; // npm install --save react-typewriter-effect

// import '../../App.css'
import "../App.css"
// import BackgroundImage from '../../assets/images/bg.png'
export default function LandingPage() {
    const [mount, setmount] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => { console.log("hello") }, 1000);
    // }, [mount]);
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center" style={{color :"#55f10d", fontSize:"20sp"}}>
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Rubrick' }}
                    startDelay={800}
                    cursorColor="red"
                    fontSize="100rem"
                    text="Welcome..."
                    typeSpeed={80}
                    scrollArea={document}
                ></TypeWriterEffect></h1>
            {/* {mount?setTimeout(() => { console.log("hello") }, 1000): setmount(true)} */}
            {/* {mount ? <h1>hello</h1> : <h1>Not hello</h1>} */}
            <p className="main-para text-center">Here for the First Time? </p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="reg_btn2"><span>log in</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register</span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    background: `black`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}