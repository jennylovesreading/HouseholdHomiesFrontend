import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../stylesheets/userRegistrationForm.css"

function UserRegistrationForm() {
    const [registeraddress, setregisteraddress] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/",
        }).then((res) => {
            if(res.data) {
                window.location.href = "/"; 
            }
        });
    }, [])

    const register = () => {
        Axios({
            method: "POST",
            data: {
                address: registeraddress,
                username: registerUsername,
                password: registerPassword,
                confirmPassword: registerConfirmPassword
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        }).then((res) => {
            console.log(res);
            if(res.status === 200 && res.data === "User Created" && window) {
                console.log("redirecting to login page");
                setregisteraddress("");
                setRegisterUsername("");
                setRegisterPassword("");
                setRegisterConfirmPassword("")
                window.location.href = "/login"; 
            }
        });
    };

    return (
    <div class="mainContainer">
        <div class="loginContainer">
            <p class="registerHeader">Register</p>
            <input
                class="registerInput"
                placeholder="address"
                onChange={(e) => setregisteraddress(e.target.value)}
            />
            <input
                class="registerInput"
                placeholder="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
                class="registerInput"
                placeholder="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input
                class="registerInput"
                placeholder="confirm password"
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            />
            <button class="registerButton" onClick={register}>Submit</button>

            <a href="/login" class="registerLoginLink">Login</a>
        </div>
    </div>
    );
}

export default UserRegistrationForm;
