import '../styles/sign-in.css';
import React from 'react';

class SignIn extends React.Component {
  // state = {
  //   email: '',
  //   password: '',
  //   errors: {
  //     email: '',
  //     password: '',
  //   },
  // };

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  render() {
    return (
      <div className="signIn-form">
        <h1>Sign In Form</h1>
        <a href="/signUp">Need an account?</a>
        <form>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input className="submit-button" type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignIn;
