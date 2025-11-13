"use client";
import { getBlogData, getData } from "@/services/test";

export default async function Page() {
  try {
    const response = await getBlogData();
    console.log("Server-side API Response:", response);
    const date = response?.data?.data?.attributes?.createdAt;
    console.log(date);

    return (
      <div>
        <h1>Test API Response</h1>
        <h2>{date}</h2>
      </div>
    );
  } catch (error) {
    console.error("API Error:", error);
    return <div>Error fetching API data</div>;
  }
}
