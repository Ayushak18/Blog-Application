import '../styles/sign-in.css';

function SignIn() {
  return (
    <div className="signIn-form">
      <h1>Sign In Form</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input className="submit-button" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default SignIn;
