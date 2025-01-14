import { apiProcessor } from "./apiService";

const apiUrl = import.meta.env.VITE_API_URL+"/auth";

export const registerNewUser = async (user) => {
  const response = await apiProcessor({
    url: `${apiUrl}/register`,
    method: "post",
    data: user,
    showToast:true,
  });
  return response;
};

export const activateNewUser = async ({sessionId, t}) => {
  const response = await await apiProcessor({
    url: `${apiUrl}/activate-user`,
    method: "post",
    data: {
      sessionId,
      t
    },
  });
  return response;
}
export const signInUser = async ({email, password}) => {
  const response = await await apiProcessor({
    url: `${apiUrl}/login`,
    method: "post",
    data: {
      email,
      password
    },
    showToast:true,
  });
  return response;
}

export const renewUserToken = async () => {
  const response = await  apiProcessor({
    url: `${apiUrl}/renew-jwt`,
    method: "get",
    isPrivate:true,
    isRefreshJwt:true,
  });
  return response;
}

export const signOutUser = async () => {
  const response = await await apiProcessor({
    url: `${apiUrl}/logout`,
    method: "get",
    isPrivate:true,
  });
  return response;
}