import { Metadata } from "next"

export const sharedOgMetadata: Metadata["openGraph"] = {
  locale: "en_AU",
  url: "https://calendar-app.protailwind.com",
  images: [
    {
      url: "/img/seo-image.jpg",
      width: 1200,
      height: 630,
      alt: "Pro Tailwind Coaching",
    },
  ],
}

export const sharedTwitterMetadata: Metadata["twitter"] = {
  site: "@protailwind",
  creator: "@protailwind",
  card: "summary_large_image",
  images: [
    {
      url: "/img/seo-image.jpg",
      width: 1200,
      height: 630,
      alt: "Pro Tailwind Coaching",
    },
  ],
}
