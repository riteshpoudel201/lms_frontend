import { apiProcessor } from "../../services/apiService";


const apiUrl = import.meta.env.VITE_API_URL+"/books";

export const fetchAllBookApi = async () => {
  const response = await apiProcessor({
    url: `${apiUrl}/admin`,
    method: "get",
    showToast:false,
    isPrivate: true,
  });
  return response;
};

export const fetchAvailableBookApi = async () => {
  const response = await apiProcessor({
    url: `${apiUrl}`,
    method: "get",
    showToast:false,
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
export const updateBookApi = async (id,payload) => {
  const response = await apiProcessor({
    url: `${apiUrl}/${id}`,
    method: "put",
    showToast:true,
    isPrivate: true,
    data: payload
  });
  return response;
};
export const deleteBookApi = async (id) => {
  const response = await apiProcessor({
    url: `${apiUrl}/${id}`,
    method: "delete",
    showToast:true,
    isPrivate: true,
  });
  return response;
};