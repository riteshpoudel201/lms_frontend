import axios from "axios";
import { toast } from "react-toastify";
export const apiProcessor = async ({
  url,
  method,
  data = {},
  headers = {},
  showToast = false,
}) => {
  try {
    if (showToast) {
      const pendingReponse = axios({
        url,
        method,
        data,
        headers,
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
    return{
      status:"error",
      message
    }
  }
};
