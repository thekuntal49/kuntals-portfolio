import { baseMetadata } from "./base";

export const skillsMetadata = {
  ...baseMetadata,
  title: "Skills – Kuntal | Node.js, Express, MongoDB & Backend Stack",
  description: "Discover Kuntal's technical skillset — Node.js, Express.js, MongoDB, REST APIs, Git, and more tools used for backend development.",
  alternates: {
    canonical: "https://kuntals-portfolio.vercel.app/skills",
  },
  openGraph: {
    title: "Skills – Kuntal",
    description: "Explore backend technologies and tools that Kuntal uses, including Node.js, Express.js, MongoDB, and more.",
    url: "https://kuntals-portfolio.vercel.app/skills",
    siteName: "Kuntal's Portfolio",
    images: [
      {
        url: "https://kuntals-portfolio.vercel.app/assets/images/Kuntal's_Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Kuntal's Skills – Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
