import React from 'react';
import axios  from 'axios';

class UserRegistrationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            houseName: "",
            username: "",
            password: "",
            confirmPassword: "",
            errors: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let name = e.target.name;

        if(name === "houseName") {
            this.setState({ houseName: e.target.value });
        } else if(name === "username") {
            this.setState({ username: e.target.value });
        } else if(name === "password") {
            this.setState({ password: e.target.value });
        } else if(name === "confirmPassword") {
            this.setState({ confirmPassword: e.target.value });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/register", this.state)
        .then((response) => {
            this.setState({ errors: [] });
            
            console.log(response);

            if(response.status === 200 && response.data === "OK" && window) {
                console.log("redirecting to login page");
                this.setState({ houseName: "", username: "",  password: "", errors: [] });
                window.location.href = "/"; 
            } else {
                this.setState({ errors: response.data });
                console.log(this.state);
            }
        })
        .catch(err => console.log(err.data))
    }

    render() {
        const { houseName, username, password, confirmPassword, errors } = this.state;
        // errors is a list of mistakes that we shud render upon a failed registration
        return (
            <div>
                <div>
                    {errors.map((error, index) => {
                        return (<p key={index}>{error}</p>)
                    })}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>House Name</p>
                        <input type="text" name="houseName" value={houseName} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Username</p>
                        <input type="text" name="username" value={username} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="text" name="password" value={password} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Confirm Password</p>
                        <input type="text" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                    </label>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserRegistrationForm;