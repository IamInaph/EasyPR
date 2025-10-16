import axiosInstance from "@/utils/axios";

export const getContactPageData = async () => {
  try {
    const response = await axiosInstance.get("/contact/?populate=deep");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getContactCMSData = async () => {
	try {
		const response = await axiosInstance.get('/contact-page?populate=deep')
		return response
	} catch (error) {
		throw error
	}
} 