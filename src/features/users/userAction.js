import { renewUserToken } from "../../services/authService";
import { fetchUserApi } from "./userApi";
import { setUsers } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, data } = await fetchUserApi();
  //receive user
  // dispatch user to redux store
  status === "success" && data?._id && dispatch(setUsers(data));
};

export const autoLoginUser =  () => async (dispatch) => {
  const accessToken = sessionStorage.getItem("accessToken");
  if (accessToken) {
    dispatch(fetchUserAction());
    return;
  }
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    const result = await renewUserToken();
    console.log(result);
    
    if(result?.data){
      sessionStorage.setItem("accessToken", result?.data);
      dispatch(fetchUserAction())
    }
  }
 
};
