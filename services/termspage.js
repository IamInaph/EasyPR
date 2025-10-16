import axiosInstance from "@/utils/axios";

export const getTermsPageData = async () => {
  try {
    const response = await axiosInstance.get(
      "/terms-and-condition/?populate=deep"
    );

    return response;
  } catch (error) {
    throw error;
  }
};
