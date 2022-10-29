import axios from 'axios';
// export const baseURL = 'https://partnerapi.funda.nl/feeds/Aanbod.svc/json';
export const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export const baseURL = 'http://localhost:3000/api';
const axiosClient = () => {
  const defaultOptions = {
    baseURL,
  };
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(async (request) => {
    request.headers = headers;
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error(
        'Looks like there was a problem. Status Code: ' + error.status
      );
      return Promise.reject(error);
    }
  );

  return instance;
};

export default axiosClient();
