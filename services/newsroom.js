import axios from "axios";
import axiosInstance from "@/utils/axios";

const newApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BLOGS_API_URL}/api`,
  timeout: 5000,
});

export const getNewsRoomData = async () => {
  try {
    const response = await newApi.get("/newsrooms");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNewsRoomBySlug = async (slug) => {
  try {
    const response = await newApi.get(`/newsrooms/${slug}`);
    console.log("Full API response:", response);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNewsRoomSEOData = async () => {
  try {
    const response = await axiosInstance.get("/newsrooms?populate=*");

    return response;
  } catch (error) {
    throw error;
  }
};
