import '../styles/sign-in.css';
import React from 'react';
import { USER_LOGIN } from '../utils/constant';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let { email, password } = this.state;
    fetch(USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { email, password } }),
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then(({ errors }) =>
            this.setState((prevState) => {
              return {
                ...prevState,
                errors: {
                  ...prevState.errors,
                  email: 'Email or password incorrect',
                },
              };
            })
          );
          throw new Error('Login is not successful');
        }
        res.json();
      })
      .then(this.setState({ email: '', password: '' }))
      .catch((error) => {
        console.log(error);
      });
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
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
          />
          <span className="sign-in-error-span">{this.state.errors.email}</span>
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
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
