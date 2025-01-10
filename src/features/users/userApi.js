import { apiProcessor } from "../../services/apiService";


const apiUrl = import.meta.env.VITE_API_URL+"/user";

export const fetchUserApi = async () => {
  const response = await apiProcessor({
    url: `${apiUrl}/profile`,
    method: "get",
    showToast:false,
    isPrivate: true,
  });
  return response;
};