import {
  sharedOgMetadata,
  sharedTwitterMetadata,
} from "@/utils/shared-metadata"

import PageComponent from "./page-component"
import { Metadata } from "next"

const title = "Booking Confirmation"
const description = "Let's confirm your booking!"

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
