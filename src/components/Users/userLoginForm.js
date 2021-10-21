import React from 'react';
import axios  from 'axios';

class UserLoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let name = e.target.name;
        if(name === "username") {
            this.setState({ username: e.target.value });
        } else if(name === "password") {
            this.setState({ password: e.target.value });
        }
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        axios.post("http://localhost:8080/login", this.state)
        .catch(err => console.log(err.data))
    }

    render() {
        const { username, password} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" name="username" value={username} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="text" name="password" value={password} onChange={this.handleChange} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserLoginForm;
