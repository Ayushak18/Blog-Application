import Header from './component/header';
import SignIn from './component/sign-in';
import SignUp from './component/sign-up';
import { Route } from 'react-router';
import Home from './component/home';
import './App.css';
import { Switch } from 'react-router-dom';
import NoMatch from './component/noMatch';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
