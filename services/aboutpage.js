import axiosInstance from "@/utils/axios";

export const getAboutPageData = async () => {
  try {
    const response = await axiosInstance.get("/about-page/?populate=deep");
    return response;
  } catch (error) {
    throw error;
  }
};