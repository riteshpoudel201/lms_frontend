import { deleteBookApi, fetchAllBookApi, fetchAvailableBookApi, fetchBookBySlugApi, postNewBookApi, updateBookApi } from "./bookApi";
import { setBooks, setPublicBooks, setSingleBook } from "./bookSlice";


export const fetchAllBookAction = () => async (dispatch) => {
  // call api
  const { status, data } = await fetchAllBookApi();
  console.log(data);
  //receive book
  // dispatch book to redux store
  status === "success" && dispatch(setBooks(data));
};
export const fetchAvailableBookAction = () => async (dispatch) => {
  // call api
  const { status, data } = await fetchAvailableBookApi();
  //receive book
  // dispatch book to redux store
  status === "success" && dispatch(setPublicBooks(data));
};

export const fetchBookBySlugAction = (slug) => async (dispatch) => {
  // call api
  const { status, data } = await fetchBookBySlugApi(slug);
  //receive book
  // dispatch book to redux store
  status === "success" && dispatch(setSingleBook(data));
};

export const postNewBookAction = (payload) => async (dispatch) => {
  // call api
  const { status, data } = await postNewBookApi(payload);
  //receive book
  // dispatch book to redux store
  status === "success" && data?._id && dispatch(setBooks(data));
};
export const updateBookAction = (payload,id) => async (dispatch) => {
  // call api
  const { status, data } = await updateBookApi(id,payload);
  //receive book
  // dispatch book to redux store
  status === "success" && data?._id && dispatch(setBooks(data));
};
export const deleteBookAction = (id) => async (dispatch) => {
  // call api
  const { status, data } = await deleteBookApi(id);
  //receive book
  // dispatch book to redux store
  status === "success" && data?._id && dispatch(setBooks(data));
};


