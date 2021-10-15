import React from 'react';

class UserRegistrationForm extends React.Component {
  render() {
    return (
      <div class="userRegistrationFormContainer">
            <form id="userRegistrationForm" action="FILL THIS UPPPP" method="POST">
                <p class="householdHomiesHeading"><a href="#">Household Homies</a></p>

                <p class="createAccountHeading">Create Account</p>

                <div class="inputOption">
                    <label class="inputOptionLabel">Your Full Name</label>
                    <input class="inputOptionInput" type="name" id="name" name="name"/>
                </div>
                <div class="inputOption">
                    <label class="inputOptionLabel" for="email">Email</label>
                    <input class="inputOptionInput" type="email" id="email" name="email"/>
                </div>
                <div class="inputOption">
                    <label class="inputOptionLabel" for="password">Password</label>
                    <input class="inputOptionInput" type="password" id="password" name="password"/>
                </div>
                <div class="inputOption">
                    <label class="inputOptionLabel" for="password2">Confirm Password</label>
                    <input class="inputOptionInput" type="password" id="password2" name="password2"/>
                </div>
        
                <div id="registerButttonContainer">
                    <button id="registerButton" type="submit">Register</button>
                </div>

                <label id="existentAccountHeading">Already have an account?</label>
                <label id="existentAccountLink"><a href="#">Login</a></label>
            </form>
        </div>
    );
  }
}

export default UserRegistrationForm;