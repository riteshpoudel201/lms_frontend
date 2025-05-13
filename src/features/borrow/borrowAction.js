import { borrowNewBookApi, fetchAllBorrowList, fetchUserBorrowList } from "./borrowApi";
import { setAllBorrow, setBorrow } from "./borrowSlice";


export const fetchUserBorrowedBookAction = () => async (dispatch) => {
  // call api
  const { status, data } = await fetchUserBorrowList();
  // dispatch book to redux store
  status === "success" && dispatch(setBorrow(data));
};
export const fetchAllBorrowedBookAction = () => async (dispatch) => {
  // call api
  const { status, data, message } = await fetchAllBorrowList();
  // dispatch book to redux store
  status === "success" ? dispatch(setAllBorrow({data, message})): dispatch(setAllBorrow({message}));
};

export const borrowNewBookAction = (payload) => async (dispatch) => {
  // call api
  const { status,message, data } = await borrowNewBookApi(payload);
  //receive book
  // dispatch book to redux store
  status === "success" && data?._id && dispatch(setBorrow(data));
  return {status, message, data}
};
// export const updateBookAction = (payload,id) => async (dispatch) => {
//   // call api
//   const { status, data } = await updateBookApi(id,payload);
//   //receive book
//   // dispatch book to redux store
//   status === "success" && data?._id && dispatch(setBooks(data));
// };
// export const deleteBookAction = (id) => async (dispatch) => {
//   // call api
//   const { status, data } = await deleteBookApi(id);
//   //receive book
//   // dispatch book to redux store
//   status === "success" && data?._id && dispatch(setBooks(data));
// };


