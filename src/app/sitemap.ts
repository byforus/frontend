import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://byforus.org",
      lastModified: new Date(),
    },
  ];
}
