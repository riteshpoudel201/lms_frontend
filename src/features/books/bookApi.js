import { apiProcessor } from "../../services/apiService";


const apiUrl = import.meta.env.VITE_API_URL+"/books";

export const fetchAllBookApi = async () => {
  const response = await apiProcessor({
    url: `${apiUrl}/`,
    method: "get",
    showToast:false,
    isPrivate: true,
  });
  return response;
};

export const fetchAvailableBookApi = async () => {
  const response = await apiProcessor({
    url: `${apiUrl}/available`,
    method: "get",
    showToast:false,
    isPrivate: true,
  });
  return response;
};

export const postNewBookApi = async (payload) => {
  const response = await apiProcessor({
    url: `${apiUrl}`,
    method: "post",
    showToast:true,
    isPrivate: true,
    data: payload
  });
  return response;
};