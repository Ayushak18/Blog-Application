import '../styles/sign-in.css';
import React from 'react';

class SignIn extends React.Component {
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
        break;
    }
    this.setState({
      [event.target.name]: event.target.value,
      errors,
    });
  };
  render() {
    return (
      <div className="signIn-form">
        <h1>Sign In Form</h1>
        <a href="/signUp">Need an account?</a>
        <form>
          <input
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            name="email"
          />
          <span className="sign-in-error-span">{this.state.errors.email}</span>
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
          <span className="sign-in-error-span">
            {this.state.errors.password}
          </span>
          <input className="submit-button" type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignIn;
