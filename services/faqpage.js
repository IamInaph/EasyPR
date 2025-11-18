// import axios from "axios";

// const faqApi = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_BLOGS_API_URL}/api`,
//   timeout: 5000,
// });

// export const getFAQData = async () => {
//   try {
//     const baseURL = process.env.NEXT_PUBLIC_BLOGS_API_URL;
//     console.log("FAQ API Base URL:", baseURL);

//     const response = await faqApi.get("/faqs");
//     console.log("FAQ API Response:", response);
//     return response.data;
//   } catch (error) {
//     console.error("FAQ API Error:", error);
//     throw error;
//   }
// };
