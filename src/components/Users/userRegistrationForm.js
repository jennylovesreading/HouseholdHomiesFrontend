import React, { useState } from "react";
import Axios from "axios";

function UserRegistrationForm() {
    const [registerhouseName, setregisterhouseName] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

    const register = () => {
    Axios({
        method: "POST",
        data: {
            houseName: registerhouseName,
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
            setregisterhouseName("");
            setRegisterUsername("");
            setRegisterPassword("");
            setRegisterConfirmPassword("")
            window.location.href = "/login"; 
        }
    });
    };

    return (
    <div>
        <div>
        <h1>Register</h1>
        <input
            placeholder="houseName"
            onChange={(e) => setregisterhouseName(e.target.value)}
        />
        <input
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <input
            placeholder="confirm password"
            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
        </div>
    </div>
    );
}

export default UserRegistrationForm;
