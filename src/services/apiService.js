import axios from "axios";

export const apiProcessor = async ({ url, method, data = {}, headers = {} }) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};


