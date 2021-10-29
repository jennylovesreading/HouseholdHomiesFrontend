import React from "react";
import "./App.css";
import UserRegistrationForm from "./components/users/userRegistrationForm"
import UserLoginForm from "./components/users/userLoginForm"
import Homepage from "./components/homepage/homepage"
import createGroupForm from "./components/users/createGroupForm";
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={UserRegistrationForm} />
          <Route path="/login" component={UserLoginForm} />
          <Route path="/createGroup" component={createGroupForm} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;