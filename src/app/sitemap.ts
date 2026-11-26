import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://topsafety-eg.com";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ar: `${base}/?lang=ar`,
          en: `${base}/?lang=en`,
        },
      },
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ar: `${base}/services?lang=ar`,
          en: `${base}/services?lang=en`,
        },
      },
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ar: `${base}/contact?lang=ar`,
          en: `${base}/contact?lang=en`,
        },
      },
    },
  ];
}
