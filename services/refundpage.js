import axiosInstance from "@/utils/axios";

export const getRefundPolicyPageData = async () => {
  try {
    const response = await axiosInstance.get(
      "/refund-policy-page/?populate=deep"
    );

    return response;
  } catch (error) {
    throw error;
  }
};
