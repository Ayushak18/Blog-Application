import Header from './component/header';
import SignIn from './component/sign-in';
import SignUp from './component/sign-up';
import { Route } from 'react-router';
import Home from './component/home';
import './App.css';
import { Switch } from 'react-router-dom';
import NoMatch from './component/noMatch';
import SingleArticle from './component/singleArticle';
import React from 'react';
import { VERIFY_USER } from './utils/constant';
import FullPageLoader from './component/fullPageLoader';
import NewArticle from './component/newArticle';
import Settings from './component/settings';
import Profile from './component/profile';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    userAvailable: '',
    isVerifying: true,
  };

  componentDidMount() {
    if (localStorage.app_user) {
      fetch(VERIFY_USER, {
        method: 'GET',
        headers: {
          authorization: `Token ${localStorage.app_user}`,
        },
      })
        .then((res) => res.json())
        .then((user) => this.updateUser(user.user));
    } else {
      this.setState({ isVerifying: false });
    }
  }

  updateUser = (user) => {
    this.setState({
      isLoggedIn: true,
      user: user,
      isVerifying: false,
    });
    localStorage.setItem('app_user', user.token);
  };
  render() {
    if (!this.state.isVerifying) {
      return (
        <>
          <Header isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signIn" exact>
              <SignIn updateUser={this.updateUser} />
            </Route>
            <Route path="/signUp">
              <SignUp updateUser={this.updateUser} />
            </Route>
            <Route path="/articles/:slug" component={SingleArticle}></Route>
            <Route path="/signUp">
              <SignUp updateUser={this.updateUser} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/newArticle">
              <NewArticle />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </>
      );
    } else {
      return <FullPageLoader />;
    }
  }
}

export default App;
