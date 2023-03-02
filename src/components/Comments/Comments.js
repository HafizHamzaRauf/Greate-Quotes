import CommentsForm from "./CommentsForm";
import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../../store/comment-slice";
import { useDispatch } from "react-redux";
const Comments = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { quoteId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchComments(setIsLoading, quoteId));
  }, []);
  const comments = useSelector((state) => state.comments.comments);
  return (
    <section className={classes["comment-section"]}>
      <h1 className={classes.centered}>User Comments</h1>
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
          }}
          className={"btn"}
        >
          Add a Comment
        </button>
      )}
      {showForm && <CommentsForm></CommentsForm>}
      {!isLoading && comments.length === 0 && (
        <p className={classes.centered}> No Comments added yet</p>
      )}
      {isLoading && <div className={"loader"}></div>}
      {!isLoading && comments.length > 0 && <CommentsList></CommentsList>}
    </section>
  );
};

export default Comments;
