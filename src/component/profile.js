import React from 'react';
import '../styles/profile.css';
import { USER_PROFILE } from '../utils/constant';
import FullPageLoader from './fullPageLoader';

class Profile extends React.Component {
  state = {
    user: '',
  };

  componentDidMount() {
    fetch(USER_PROFILE + '/' + this.props.match.params.username)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  }

  render() {
    if (this.state.user) {
      return (
        <div className="profile">
          <h1>Profile</h1>
          <div className="profile-user-info">
            <img src={this.state.user.profile.image} alt="" />
            <h1>{this.state.user.profile.username}</h1>
            <p>{this.state.user.profile.bio}</p>
          </div>
        </div>
      );
    } else {
      return <FullPageLoader />;
    }
  }
}

export default Profile;
