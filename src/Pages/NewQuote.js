import { useHistory } from "react-router-dom"; /// for using the use History we can  navigate the data

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "./../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
    //  loading spinner  is in quote form
  );
};

export default NewQuote;
