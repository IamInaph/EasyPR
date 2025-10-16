import axiosInstance from "@/utils/axios";

export const getPolicyPageData = async () => {
  try {
    const response = await axiosInstance.get("/policy-page/?populate=deep");

    return response;
  } catch (error) {
    throw error;
  }
};
