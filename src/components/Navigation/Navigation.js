import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = function ({ children }) {
  const [active, setActive] = useState(true);
  const changeActiveHandler = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes["website-name"]}>Quotes Website</h1>
        <nav className={classes.navigation}>
          <NavLink
            onClick={changeActiveHandler}
            className={`${classes["nav-link"]} ${
              active ? classes["active-link"] : ""
            }`}
            to={"/quotes"}
          >
            All Quotes
          </NavLink>
          <NavLink
            onClick={changeActiveHandler}
            className={`${classes["nav-link"]} ${
              !active ? classes["active-link"] : ""
            } `}
            to={"/new-quote"}
          >
            Add a Quote
          </NavLink>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Navigation;
