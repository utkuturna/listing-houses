import axiosClient from './apiClient';

export const getCity = async (city: string) => {
  try {
    const response = await axiosClient.get(`/city/${city}`);
    return response.data;
  } catch (e) {
    // @todo implement better error handling
    console.log(e);
  }
};

/*export const getCity = async (city: string) => {
  const response = await fetch(`${baseURL}/${apiKey}/?type=koop&zo=/${city}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  console.log(response);
  return await response.json();
};*/

/*export const getCity = async (city: string) => {};*/
