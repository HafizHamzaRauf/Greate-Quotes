import { useParams } from "react-router-dom";
import FullQuote from "../FullQuote/FullQuote";

const SingleQuote = () => {
  const { quoteId } = useParams();
  return (
    <>
      <FullQuote></FullQuote>
    </>
  );
};

export default SingleQuote;
