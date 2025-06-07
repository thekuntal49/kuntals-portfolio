import { baseMetadata } from "./base";

export const aboutMetadata = {
  ...baseMetadata,
  title: "About – Kuntal | Backend Developer (Node.js, Express, MongoDB)",
  description: "Learn more about Kuntal, a backend developer with expertise in building scalable server-side applications using Node.js, Express, and MongoDB.",
  alternates: {
    canonical: "https://kuntals-portfolio.vercel.app/about",
  },
  openGraph: {
    title: "About – Kuntal | Backend Developer",
    description: "Get to know Kuntal, a backend developer focused on Node.js, Express.js, and MongoDB.",
    url: "https://kuntals-portfolio.vercel.app/about",
    siteName: "Kuntal's Portfolio",
    images: [
      {
        url: "https://kuntals-portfolio.vercel.app/assets/images/Kuntal's_Photo.jpg",
        width: 1200,
        height: 630,
        alt: "About Kuntal – Backend Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};
