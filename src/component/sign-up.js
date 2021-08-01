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
    let errors = { ...this.state.errors };
    switch (event.target.name) {
      case 'email':
        let emailError = event.target.value.includes('@' && '.com')
          ? ''
          : 'Email is invalid';
        errors.email = emailError;
        break;
      case 'password':
        let passwordError =
          event.target.value.length < 6
            ? 'Password should be 6 character long'
            : '';
        errors.password = passwordError;
    }
    this.setState({
      [event.target.name]: event.target.value,
      errors,
    });
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
          <span className="sign-up-error-span">{this.state.errors.email}</span>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <span className="sign-up-error-span">
            {this.state.errors.password}
          </span>
          <input className="submit-button" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SignUp;
