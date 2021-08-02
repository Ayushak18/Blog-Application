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

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
  };

  componentDidMount() {
    console.log('App Mounted');
    if (localStorage.app_user) {
      fetch(VERIFY_USER, {
        method: 'GET',
        headers: {
          authorization: `Token ${localStorage.app_user}`,
        },
      })
        .then((res) => res.json())
        .then((user) => this.updateUser(user.user));
    }
  }

  updateUser = (user) => {
    this.setState({
      isLoggedIn: true,
      user: user,
    });
    console.log(user);
    localStorage.setItem('app_user', user.token);
  };
  render() {
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
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
