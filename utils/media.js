// utils/media.js
import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const fallback = "/images/fallback.png"; // Add a fallback image in /public

  if (!media) {
    console.warn("No media provided to getStrapiMedia");
    return fallback;
  }

  // Handle nested media.data array (current Strapi structure)
  if (Array.isArray(media?.data) && media.data.length > 0) {
    const firstMedia = media.data[0];
    const url = firstMedia?.attributes?.url;
    return url ? (url.startsWith("/") ? getStrapiURL(url) : url) : fallback;
  }

  // Handle legacy single media object (if still used elsewhere)
  if (media?.data?.attributes?.url) {
    const url = media.data.attributes.url;
    return url.startsWith("/") ? getStrapiURL(url) : url;
  }

  console.warn("Invalid media structure:", media);
  return fallback;
}

// Optional: Keep this for other cases, but it’s likely redundant now
export function getStrapiMediaFromArray(media) {
  const fallback = "/images/fallback.png";

  if (!media) {
    console.warn("No media provided to getStrapiMediaFromArray");
    return fallback;
  }

  const url = media?.attributes?.url;
  return url ? (url.startsWith("/") ? getStrapiURL(url) : url) : fallback;
}

export function changeStrapiMarkdown(mdText) {
  return mdText.replace(/(!\[.*?\]\()(.+?)(\))/g, (whole, a, b, c) => {
    return a + getStrapiURL(b) + c;
  });
}

export const createImageUrl = (image) =>
  image ? URL.createObjectURL(image) : "";

//new
export const getMediaUrl = (url) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${url}`;
};
