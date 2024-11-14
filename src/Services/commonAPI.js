
import axios from 'axios';

export const commonAPI = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
  };

  try {
    const response = await axios(reqConfig);
    return response.data; 
  } catch (error) {
    console.error('API call error:', error);
   
    return { error: error.message };
  }
};



