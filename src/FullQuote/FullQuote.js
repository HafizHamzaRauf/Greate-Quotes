import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import classes from "./FullQuote.module.css";

const FullQuote = () => {
  const { quoteId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [loadComments, setLoadComments] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch("https://great-quotes-ba9e4-default-rtdb.firebaseio.com/quotes.json")
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          if (quoteId === key) {
            setCurrentQuote(data[key]);
            break;
          }
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (quoteId === String(undefined)) {
    return <p className={classes.notFound}>No Quote Found </p>;
  }

  return (
    <>
      {!isLoading && (
        <section className={classes["quote-section"]}>
          <div className={classes["quote"]}>
            <p className={classes["quote-text"]}>{currentQuote?.text}</p>
            <p className={classes["quote-author"]}> {currentQuote?.author}</p>
          </div>
          {!loadComments && (
            <button
              className={classes.load}
              onClick={() => setLoadComments(true)}
            >
              load Comments
            </button>
          )}
          {loadComments && <Comments></Comments>}
        </section>
      )}
      {isLoading && <div className={classes.loader}></div>}
    </>
  );
};
export default FullQuote;
