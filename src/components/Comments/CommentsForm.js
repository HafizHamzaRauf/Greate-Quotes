import { useState } from "react";
import classes from "./CommentsForm.module.css";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/comment-slice";
import { useParams } from "react-router-dom";
const CommentsForm = () => {
  const [comment, setComment] = useState("");
  const { quoteId } = useParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const commentSubmitHandler = (e) => {
    e.preventDefault();
    // perform validation here
    if (comment.trim() === "") {
      setError(true);
      return;
    }

    // add the comment to the server then update the  UI
    dispatch(addComment({ quoteId, comment }));
    setComment("");
  };
  return (
    <>
      <form onSubmit={commentSubmitHandler} className={classes.form}>
        <label> Your Comment</label>
        {error && <p style={{ color: "red" }}>Please Enter a valid value </p>}
        <textarea
          onChange={(e) => {
            if (e.target.value.trim() !== "") {
              setError(false);
            }
            setComment(e.target.value);
          }}
          value={comment}
        ></textarea>
        <button className={"btn"}>Add a comment</button>
      </form>
    </>
  );
};

export default CommentsForm;
