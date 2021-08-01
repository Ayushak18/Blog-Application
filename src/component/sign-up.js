import '../styles/sign-up.css';
import React from 'react';
import { USER_LOGIN } from '../utils/constant';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    username: '',
    errors: {
      email: '',
      password: '',
      username: '',
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
      case 'username':
        let userNameError =
          event.target.value.length < 6
            ? 'Username should be 6 character long'
            : '';
        errors.username = userNameError;
        break;
    }
    this.setState({
      [event.target.name]: event.target.value,
      errors,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { username, email, password } = this.state;
    fetch(USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { username, email, password } }),
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then(({ errors }) => this.setState({ errors }));
          throw new Error('Something went wrong');
        }
        res.json();
      })
      .then(this.setState({ username: '', email: '', password: '' }))
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="signUp-form">
        <h1>Sign Up Form</h1>
        <a href="/signIn">Already have an account?</a>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
          />
          <span className="sign-up-error-span">
            {this.state.errors.username}
          </span>
          <input
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
          />
          <span className="sign-up-error-span">{this.state.errors.email}</span>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
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
