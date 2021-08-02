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

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
  };

  updateUser = (user) => {
    this.setState({
      isLoggedIn: true,
      user: user,
    });
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
