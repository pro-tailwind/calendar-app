import { Metadata } from "next"

import LayoutWrapper from "@/components/layout-wrapper"
import "@/styles/tailwind.css"

import {
  sharedOgMetadata,
  sharedTwitterMetadata,
} from "@/utils/shared-metadata"

const title = "Pro Tailwind Coaching"
const description =
  "A fictive booking application to support the Pro Tailwind workshops"

export const metadata: Metadata = {
  metadataBase: new URL("https://calendar-app.protailwind.com/"),
  title: {
    template: "%s | Pro Tailwind Coaching",
    default: title,
  },
  description,
  openGraph: {
    ...sharedOgMetadata,
    title: {
      template: "%s | Pro Tailwind Coaching",
      default: title,
    },
    description,
  },
  twitter: {
    ...sharedTwitterMetadata,
    title: {
      template: "%s | Pro Tailwind Coaching",
      default: title,
    },
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
