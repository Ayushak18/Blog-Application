import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <div className="header-nav header-flex">
        <NavLink to="/" className="header-heading">
          Conduit
        </NavLink>
        <ul className="header-flex">
          <li>
            <NavLink activeClassName="header-active-link" to="/" exact>
              Home
            </NavLink>
          </li>

          {props.isLoggedIn && props.user ? (
            <>
              <li>
                <h1>{props.user.username}</h1>
              </li>
              <li>
                <NavLink activeClassName="header-active-link" to="/signIn">
                  New Article
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="header-active-link" to="/signIn">
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="header-active-link" to="/signIn">
                  Sign Out
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink activeClassName="header-active-link" to="/signIn">
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="header-active-link" to="/signUp">
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
