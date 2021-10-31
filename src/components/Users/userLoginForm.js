import React, { useState, useEffect } from "react";
import Axios from "axios";

function UserLoginForm() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
        console.log(res);
        if(res.status === 200 && res.data !== "No User Exists" && window) {
            console.log("redirecting to home page");
            setLoginUsername("");
            setLoginPassword("");
            window.location.href = "/"; 
        }
    });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
    </div>
  );
}

export default UserLoginForm;
