import axiosInstance from '@/utils/axios';

export const createOrder = async (payload) => {
  try {
    return await axiosInstance.post('/orders/create', payload);
  } catch (error) {
    throw error;
  }
};

export const getOrderByOrderId = async (orderId) => {
  try {
    const response = await axiosInstance.get(`/order/${orderId}`);
    
    return response;
  } catch (error) {
    console.error("Error fetching order details", error);
    return null;
  }
};

export const getOrderByStripePaymentId = async (stripePaymentId) => {
  try {
    return await axiosInstance.get(`/orders/byStripeId/${stripePaymentId}`);
  } catch (error) {}
};
