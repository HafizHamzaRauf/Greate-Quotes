import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quotes: [],
};
const QuoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote(state, action) {
      state.quotes.push(action.payload);
    },
    setQuotes(state, action) {
      state.quotes = action.payload;
    },
  },
});

export const QuotesReducer = QuoteSlice.reducer;
export const QuoteActions = QuoteSlice.actions;

export const fetchQuote = (setIsLoading) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://great-quotes-ba9e4-default-rtdb.firebaseio.com/quotes.json"
      );
      const data = await response.json();
      const newArray = [];
      for (const keys in data) {
        newArray.push({ id: keys, ...data[keys] });
      }
      setIsLoading(false);
      dispatch(QuoteActions.setQuotes(newArray));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendQuote = (quote) => {
  return async (dispatch) => {
    try {
      await fetch(
        "https://great-quotes-ba9e4-default-rtdb.firebaseio.com/quotes.json",
        {
          method: "POST",
          body: JSON.stringify(quote),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(fetchQuote(() => {}));
    } catch (err) {
      console.log(err.message);
    }
  };
};
