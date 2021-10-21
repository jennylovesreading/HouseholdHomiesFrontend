import React from 'react';
import axios  from 'axios';

class UserRegistrationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            username: "",
            password: "",
            confirmPassword: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let name = e.target.name;

        if(name === "firstname") {
            this.setState({ firstName: e.target.value });
        } else if(name === "lastname") {
            this.setState({ lastName: e.target.value });
        } else if(name === "email") {
            this.setState({ email: e.target.value });
        } else if(name === "number") {
            this.setState({ number: e.target.value });
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
        .catch(err => console.log(err.data))
    }

    render() {
        const { firstName, lastName, email, number, username, password, confirmPassword } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>First Name</p>
                        <input type="text" name="firstname" value={firstName} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Last Name</p>
                        <input type="text" name="lastname" value={lastName} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="text" name="email" value={email} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input type="text" name="number" value={number} onChange={this.handleChange} />
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