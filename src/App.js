import './App.css';
import UserRegistrationForm from "./components/Users/userRegistrationForm"
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={UserRegistrationForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
