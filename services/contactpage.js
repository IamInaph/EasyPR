import axiosInstance from "@/utils/axios";
import axios from "axios";

const contactApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BLOGS_API_URL}/api`,
  timeout: 5000,
});

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

export const submitContactForm = async (formData) => {
  try {
    const response = await contactApi.post("/contacts", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 