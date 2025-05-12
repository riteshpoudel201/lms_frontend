import { apiProcessor } from "../../services/apiService";


const apiUrl = import.meta.env.VITE_API_URL+"/borrow";

export const fetchUserBorrowList = async () => {
  const response = await apiProcessor({
    url: `${apiUrl}/`,
    method: "get",
    showToast:false,
    isPrivate: true,
  });
  return response;
};



export const borrowNewBookApi = async (payload) => {
  const response = await apiProcessor({
    url: `${apiUrl}/many`,
    method: "post",
    showToast:false,
    isPrivate: true,
    data: payload
  });
  return response;
};
// export const updateBookApi = async (id,payload) => {
//   const response = await apiProcessor({
//     url: `${apiUrl}/${id}`,
//     method: "put",
//     showToast:true,
//     isPrivate: true,
//     data: payload
//   });
//   return response;
// };
// export const deleteBookApi = async (id) => {
//   const response = await apiProcessor({
//     url: `${apiUrl}/${id}`,
//     method: "delete",
//     showToast:true,
//     isPrivate: true,
//   });
//   return response;
// };