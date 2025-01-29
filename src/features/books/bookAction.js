import { fetchAllBookApi, fetchAvailableBookApi } from "./bookApi";
import { setBooks } from "./bookSlice";


export const fetchAllBookAction = () => async (dispatch) => {
  // call api
  const { status, data } = await fetchAllBookApi();
  //receive book
  // dispatch book to redux store
  status === "success" && data?._id && dispatch(setBooks(data));
};
export const fetchAvailableBookAction = () => async (dispatch) => {
  // call api
  const { status, data } = await fetchAvailableBookApi();
  //receive book
  // dispatch book to redux store
  status === "success" && data?._id && dispatch(setBooks(data));
};


