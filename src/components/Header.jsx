import { NavLink, Link } from "react-router-dom";
import classes from "../styles/Header.module.css";

const Header = () => {
  console.log(classes);

  return (
    <div>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={(navInfo) => {
              navInfo.isActive ? classes.active : "";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
