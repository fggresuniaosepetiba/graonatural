import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about-page";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function SobrePage() {
  return <AboutPage />;
}
