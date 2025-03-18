import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAvailableBookAction } from "@features/books/bookAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //fetch available books to the client.
    console.log("Inside app.jsx use effect.")
    dispatch(fetchAvailableBookAction());
  }, [dispatch]);
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
