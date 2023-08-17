import { Metadata } from "next"

import { SidePanel } from "./side-panel"
import { MainPanel } from "./main-panel"
import { BackgroundDecoration } from "./background-decoration"
import { Ribbon } from "./ribbon"

const title = "Pro Tailwind Coaching"
const description =
  "A fictive booking application to support the Pro Tailwind workshops"

const seoImagePath = "/img/seo-image.jpg"

export const metadata: Metadata = {
  metadataBase: new URL("https://calendar-app.protailwind.com/"),
  title: {
    template: "%s | Pro Tailwind Coaching",
    default: title,
  },
  description: description,
  openGraph: {
    title,
    description,
    locale: "en_AU",
    url: "https://calendar-app.protailwind.com",
    images: [
      {
        url: seoImagePath,
        width: 1200,
        height: 630,
        alt: "Pro Tailwind Coaching",
      },
    ],
  },
  twitter: {
    title,
    description,
    site: "@protailwind",
    creator: "@protailwind",
    card: "summary_large_image",
    images: [
      {
        url: seoImagePath,
        width: 1200,
        height: 630,
        alt: "Pro Tailwind Coaching",
      },
    ],
  },
}

export function Shell({ children }) {
  return (
    <div className="grid min-h-screen place-items-center">
      <BackgroundDecoration />
      <div className="mx-auto w-full max-w-5xl px-2 py-16 sm:px-6 lg:max-w-7xl lg:px-3 xl:px-8">
        <div className="relative">
          <Ribbon />
          <div className="grid h-full rounded-2xl shadow-lg lg:grid-cols-[theme(width.80),1fr] xl:grid-cols-[theme(width.96),1fr]">
            <SidePanel />
            <MainPanel>{children}</MainPanel>
          </div>
        </div>
      </div>
    </div>
  )
}
