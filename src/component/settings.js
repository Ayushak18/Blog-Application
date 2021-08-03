import '../styles/settings.css';
import { USER_PROFILE } from '../utils/constant';
import { withRouter } from 'react-router-dom';

function Settings(props) {
  let handleFormSubmit = (event) => {
    event.preventDefault();

    let formData = {
      user: {
        email: event.target.email.value,
        bio: event.target.bio.value,
        image: event.target.image.value,
        password: event.target.password.value,
      },
    };
    fetch(USER_PROFILE, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${localStorage.app_user}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => props.history.push('/profile'));
  };
  return (
    <div className="settings-page">
      <h1>Your Settings</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="URL of Profile Picture" name="image" />
        <textarea
          cols="30"
          rows="10"
          placeholder="Short bio about you"
          name="bio"
        ></textarea>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="New Password" name="password" />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}

export default withRouter(Settings);
