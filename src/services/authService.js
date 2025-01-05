import { apiProcessor } from "./apiService";

const apiUrl = import.meta.env.VITE_API_URL+"/auth";

export const registerNewUser = async (user) => {
  const response = await apiProcessor({
    url: `${apiUrl}/register`,
    method: "post",
    data: user,
  });
  return response;
};
