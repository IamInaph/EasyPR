export default function sitemap() {
  const baseUrl = "https://www.easyprwire.com";
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sample-report.pdf`,
      lastModified: new Date("2025-04-29T10:37:11+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/order/track-status?orderId=`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/order`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-distribute-press-release`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "weekly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blog/the-vital-role-of-press-release-distribution-in-branding-and-marketing`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "weekly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/blog/press-release-cost-low-cost-distribution`,
      lastModified: new Date("2025-04-30T07:10:24+00:00"),
      changeFrequency: "weekly",
      priority: 0.64,
    },
  ];
}
