import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
};
const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, action) {
      state.comments.push(action.payload);
    },
    setComments(state, action) {
      state.comments = action.payload;
    },
  },
});

export const CommentReducer = CommentSlice.reducer;
export const CommentActions = CommentSlice.actions;

export const addComment = (obj) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://great-quotes-ba9e4-default-rtdb.firebaseio.com/comments.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(CommentActions.addComment(obj));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchComments = (setIsLoading, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://great-quotes-ba9e4-default-rtdb.firebaseio.com/comments.json"
      );
      const data = await response.json();
      const comments = [];

      for (const key in data) {
        if (data[key].quoteId === id) {
          comments.push(data[key]);
        }
      }
      setIsLoading(false);
      dispatch(CommentActions.setComments(comments));
    } catch (err) {
      console.log(err);
    }
  };
};
