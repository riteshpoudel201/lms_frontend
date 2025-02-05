import axios from "axios";
import { toast } from "react-toastify";

const getAccessJwt = () => {
  return sessionStorage.getItem("accessToken");
};
const getRefreshJwt = () => {
  return localStorage.getItem("refreshToken");
};
export const apiProcessor = async ({
  url,
  method,
  data = {},
  isPrivate = false,
  showToast = false,
  isRefreshJwt= false,
}) => {
  const headers = {};
  if (isPrivate) {
    const token = isRefreshJwt ? getRefreshJwt() : getAccessJwt();
    headers.authorization = `Bearer ${token}`;
  }
  
  try {
    if (showToast) {
      const pendingReponse = axios({
        url,
        method,
        data,
        headers,
      },{
        timeout:1000,
      });
      toast.promise(pendingReponse, {
        pending: "Please wait...",
      });
      const response = await pendingReponse;
      toast[response?.data?.status](response?.data?.message);
      return response.data || response;
    } else {
      const response = await axios({
        url,
        method,
        data,
        headers,
      });
      return response.data || response;
    }
  } catch (error) {
    const message = error.response.data.message || error.message;
    showToast && toast.error(message);
    return {
      status: "error",
      message,
    };
  }
};
