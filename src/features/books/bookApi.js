import { apiProcessor } from "../../services/apiService";


const apiUrl = import.meta.env.VITE_API_URL+"/book";

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