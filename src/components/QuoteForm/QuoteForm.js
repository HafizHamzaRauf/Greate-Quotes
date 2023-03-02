import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendQuote } from "../../store/quote-slice";
import classes from "./QuoteForm.module.css";

const QuoteForm = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setQuote((prevQuote) => ({ ...prevQuote, [name]: value }));
    setError(false);
  }, []);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!quote.text.trim() || !quote.author.trim()) {
        setError(true);
        return;
      }
      dispatch(sendQuote(quote));
      navigate("/quotes");
    },
    [dispatch, navigate, quote]
  );

  return (
    <form onSubmit={handleFormSubmit} className={classes.form}>
      <label className={classes.label}>Author</label>
      <input
        name="author"
        onChange={handleInputChange}
        value={quote.author}
        className={classes.input}
        type="text"
      />
      <label className={classes.label}> Text</label>
      <textarea
        name="text"
        onChange={handleInputChange}
        value={quote.text}
        className={`${classes.text} ${classes.input}`}
        placeholder="Enter your quote here"
      />
      {error && <p className={classes.error}>Please enter a valid value</p>}
      <button className={classes.btn}>Add Quote</button>
    </form>
  );
};

export default QuoteForm;
