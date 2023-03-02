import classes from "./SingleQuote.module.css";
import { useNavigate } from "react-router-dom";
const SingleQuote = ({ key, quoteText, author, id }) => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(`/quotes/${id}`);
  };
  return (
    <li key={key} id={id} className={classes["single-quote"]}>
      <div className={classes.quote}>
        <h2> {quoteText}</h2>
        <p>{author}</p>
      </div>
      <button onClick={navigationHandler} id={id} className={classes.btn}>
        View FullScreen
      </button>
    </li>
  );
};

export default SingleQuote;
