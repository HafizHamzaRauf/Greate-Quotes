import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
const Navigation = function ({ children }) {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes["website-name"]}>Quotes Website</h1>
        <nav className={classes.navigation}>
          <Link className={classes["nav-link"]} to={"/quotes"}>
            All Quotes
          </Link>
          <Link className={classes["nav-link"]} to={"new-quote"}>
            Add a Quote
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Navigation;
