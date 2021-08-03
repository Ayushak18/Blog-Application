import '../styles/settings.css';

function Settings() {
  return (
    <div className="settings-page">
      <h1>Your Settings</h1>
      <form>
        <input type="text" placeholder="URL of Profile Picture" />
        <input type="text" placeholder="Name" />
        <textarea
          cols="30"
          rows="10"
          placeholder="Short bio about you"
        ></textarea>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="New Password" />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}

export default Settings;
