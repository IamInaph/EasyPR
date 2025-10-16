import axiosInstance from '@/utils/axios';

export const getOrderPageData = async () => {
  try {
    const response = await axiosInstance.get('/order-page/?populate=deep');

    return response;
  } catch (error) {
    throw error;
  }
};
