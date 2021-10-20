import './App.css';
import UserRegistrationForm from "./components/Users/userRegistrationForm"
import UserLoginForm from "./components/Users/userLoginForm"
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
         <Route path="/register" component={UserRegistrationForm} />
         <Route path="/login" component={UserLoginForm} />     
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
