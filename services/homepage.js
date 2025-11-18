import axiosInstance from "@/utils/axios";

export const getHomepageData = async () => {
  try {
    const response = await axiosInstance.get("/home-page/?populate=deep,10", {
      timeout: 10000,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
