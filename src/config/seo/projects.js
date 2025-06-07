import { baseMetadata } from "./base";

export const projectsMetadata = {
  ...baseMetadata,
  title: "Projects – Kuntal | Backend Portfolio with Node.js & APIs",
  description: "Browse backend projects built by Kuntal using Node.js, Express.js, and MongoDB. Includes real-time apps, REST APIs, and production-level backend systems.",
  alternates: {
    canonical: "https://kuntals-portfolio.vercel.app/projects",
  },
  openGraph: {
    title: "Projects – Kuntal",
    description: "Kuntal's backend development portfolio including real-world REST APIs and full-stack applications.",
    url: "https://kuntals-portfolio.vercel.app/projects",
    siteName: "Kuntal's Portfolio",
    images: [
      {
        url: "https://kuntals-portfolio.vercel.app/assets/images/Kuntal's_Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Backend Projects by Kuntal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
