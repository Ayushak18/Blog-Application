import '../styles/sign-up.css';
import React from 'react';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="signUp-form">
        <h1>Sign Up Form</h1>
        <a href="/signIn">Already have an account?</a>
        <form>
          <input type="text" placeholder="Full Name" />
          <input
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            name="email"
          />
          <span>this is an error span</span>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input className="submit-button" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SignUp;
