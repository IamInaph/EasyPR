// import { API_BASE_URL } from "@/constants";
import axiosInstance from "@/utils/axios";

// const axiosInstance = axios.create({
//   baseURL: `${API_BASE_URL}/api`,
//   timeout: 3000,
// });

export const getBlogData = async () => {
  try {
    const response = await axiosInstance.get("/blog-page/?populate=deep,2", {
      timeout: 10000,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

//constants
// export const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:7777";
