import React from "react";
import NavBar from "./navBar"
import "../../stylesheets/userLoginForm.css";
import "../../stylesheets/navBar.css"

function Homepage() {

  return (  
    <div className="mainContainer">
        <NavBar />
        <p>Homepage</p>
    </div>
  );
}

export default Homepage;
