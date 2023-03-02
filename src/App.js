import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddQuotePage from "./pages/AddQuote";
import QuotesPage from "./pages/Quotes";
import Navigation from "./components/Navigation/Navigation";
import SingleQuote from "./pages/SingleQuote";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/new-quote" element={<AddQuotePage />} />
          <Route path="/quotes/:quoteId" element={<SingleQuote />} />
          <Route path="/" element={<Navigate to="/quotes" />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default App;
