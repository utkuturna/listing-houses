import axiosClient from './apiClient';

export const getHouse = async (id: string) => {
  try {
    const response = await axiosClient.get(`/house/${id}`);
    return response.data;
  } catch (e) {
    // @todo implement better error handling
    throw new Error('Network response was not ok');
  }
};
