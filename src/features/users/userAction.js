import { fetchUserApi } from "./userApi";
import { setUsers } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, data } = await fetchUserApi();
  //receive user
  // dispatch user to redux store
  status === "success" && data?._id && dispatch(setUsers(data));
};
