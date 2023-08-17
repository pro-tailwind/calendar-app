import {
  sharedOgMetadata,
  sharedTwitterMetadata,
} from "@/utils/shared-metadata"

import PageComponent from "./page-component"
import { Metadata } from "next"

const title = "You're all set!"
const description = "Looking forward to catching up!"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...sharedOgMetadata,
    title,
    description,
  },
  twitter: {
    ...sharedTwitterMetadata,
    title,
    description,
  },
}

export default function BookingDetailsPage() {
  return <PageComponent />
}
