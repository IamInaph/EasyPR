import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const getMeta = (name) =>
      doc.querySelector(`meta[name="${name}"]`)?.getAttribute("content") ||
      doc.querySelector(`meta[property="${name}"]`)?.getAttribute("content");

    const title =
      getMeta("og:title") ||
      getMeta("title") ||
      doc.querySelector("title")?.textContent ||
      getMeta("twitter:title") ||
      "";

    const description =
      getMeta("og:description") ||
      getMeta("description") ||
      getMeta("twitter:description") ||
      "";

    const image = getMeta("og:image") || getMeta("twitter:image") || "";

    const date =
      getMeta("article:published_time") ||
      getMeta("og:updated_time") ||
      getMeta("article:modified_time") ||
      "";

    // Get the source domain
    const sourceUrl = new URL(url);
    const source = sourceUrl.hostname.replace("www.", "");

    return NextResponse.json({
      title: title.trim(),
      summary: description.trim(),
      image,
      date,
      source,
      url,
    });
  } catch (err) {
    console.error("Scrape failed:", err);
    return NextResponse.json(
      { error: "Failed to fetch metadata" },
      { status: 500 }
    );
  }
}
