import classes from "./CommentsList.module.css";
import { useSelector } from "react-redux";

const CommentsList = function () {
  const comments = useSelector((state) => state.comments.comments);

  const commentContent = comments.map((val) => <li>{val.comment}</li>);
  return <ul className={classes.list}>{commentContent}</ul>;
};

export default CommentsList;
