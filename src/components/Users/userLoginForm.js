import React from 'react';
import axios  from 'axios';

class UserLoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            failedLogin: ""
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
        e.preventDefault();

        this.setState({ failedLogin: "" });

        axios.post("http://localhost:8080/login", this.state)
        .then((response) => {
            console.log(response);
            if(response.status === 200 && response.data !== "OK" && window) {
                this.setState({ username: "", password: "", failedLogin: "" });
                window.location.href = "/"; 
            } else {
                this.setState({ failedLogin: "Invalid credentials" });
            }
        })
        .catch(err => console.log(err.data))
    }

    render() {
        const { username, password, failedLogin} = this.state;

        return (
            <div>
                <div>
                    {failedLogin && (<p>{failedLogin}</p>)}
                </div>

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
