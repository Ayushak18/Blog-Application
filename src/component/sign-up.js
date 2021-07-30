import '../styles/sign-up.css';

function SignUp() {
  return (
    <div className="signUp-form">
      <h1>Sign Up Form</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input className="submit-button" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
