import { configureStore } from "@reduxjs/toolkit";
import { CommentReducer } from "./comment-slice";
import { QuotesReducer } from "./quote-slice";

export const store = configureStore({
  reducer: {
    quotes: QuotesReducer,
    comments: CommentReducer,
  },
});
