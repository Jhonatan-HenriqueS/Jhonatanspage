import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/_data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(SITE_URL ? { host: SITE_URL } : {}),
  };
}
