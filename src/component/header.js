import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
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
        </ul>
      </div>
    </>
  );
}

export default Header;
