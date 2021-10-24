import './App.css';
import Homepage from "./components/homepage/homepage"
import UserRegistrationForm from "./components/users/userRegistrationForm"
import UserLoginForm from "./components/users/userLoginForm"
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/register" component={UserRegistrationForm} />
          <Route path="/login" component={UserLoginForm} />     
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
