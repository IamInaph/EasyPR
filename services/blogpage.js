import axios from "axios";
import axiosInstance from "@/utils/axios";

const newApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BLOGS_API_URL}/api`,
  timeout: 5000,
});

export const getBlogData = async () => {
  try {
    const response = await newApi.get("/blogs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await newApi.get(`/blogs/${slug}`);
    console.log("Full API response:", response);
    console.log("Response data:", response.data);
    return response.data;
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
