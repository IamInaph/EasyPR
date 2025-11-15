import axios from "axios";
import axiosInstance from "@/utils/axios";

const newApi = axios.create({
  baseURL: "https://easypr.myastrosign.com/api",
  timeout: 5000,
});

// export const getBlogData = async () => {
// 	try {
// 		const response = await axiosInstance.get('/blog-page/?populate=deep')

// 		return response
// 	} catch (error) {
// 		throw error
// 	}
// }

export const getBlogData = async () => {
  try {
    const response = await newApi.get("/blogs");

    return response;
  } catch (error) {
    throw error;
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await newApi.get(
      `/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getBlogSEOData = async () => {
  try {
    const response = await axiosInstance.get("/blogs?populate=*");

    return response;
  } catch (error) {
    throw error;
  }
};
