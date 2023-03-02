import SingleQuote from "../SingleQuote/SingleQuote";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Quotes.module.css";
import { useEffect, useState } from "react";
import { fetchQuote } from "../../store/quote-slice";
import { useNavigate, useLocation } from "react-router-dom";
import { sort } from "../../utils/sort";
const Quotes = () => {
  const quotes = useSelector((state) => state.quotes.quotes);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isAscending, setIsAscending] = useState(false);
  const navigate = useNavigate();
  const sortingHandler = () => {
    const str = `/quotes?sort=${isAscending ? "asc" : "desc"}`;
    setIsAscending((prevState) => !prevState);
    navigate(str, { replace: true });
  };
  const queryParams = new URLSearchParams(location.search);
  const sorting = queryParams.get("sort");
  const updatedQuotes = sort(quotes, sorting);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchQuote(setIsLoading));
  }, []);

  const quotesContent = updatedQuotes.map((item) => (
    <SingleQuote
      key={item.id}
      quoteText={item.text}
      author={item.author}
      id={item.id}
    ></SingleQuote>
  ));
  return (
    <section className={classes.quotes}>
      {isLoading && <div className={classes.loader}></div>}

      {!isLoading && quotes.length > 0 && (
        <>
          <button className={classes.sort} onClick={sortingHandler}>
            Sort {isAscending ? "Ascending" : "Descending"}
          </button>
          <hr className={classes.line}></hr>

          <ul className={classes["quote-list"]}>{quotesContent}</ul>
        </>
      )}
      {!isLoading && quotes.length === 0 && (
        <p className={classes.notFound}>No Quotes Found</p>
      )}
    </section>
  );
};

export default Quotes;
