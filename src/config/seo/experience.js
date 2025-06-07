import { baseMetadata } from "./base";

export const experienceMetadata = {
  ...baseMetadata,
  title: "Experience – Kuntal | Backend Developer Internships & Projects",
  description: "View Kuntal’s backend development experience, including internships and real-world projects using Node.js, Express.js, and MongoDB.",
  alternates: {
    canonical: "https://kuntals-portfolio.vercel.app/experience",
  },
  openGraph: {
    title: "Experience – Kuntal",
    description: "Kuntal's backend development experience, projects, and internships.",
    url: "https://kuntals-portfolio.vercel.app/experience",
    siteName: "Kuntal's Portfolio",
    images: [
      {
        url: "https://kuntals-portfolio.vercel.app/assets/images/Kuntal's_Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Backend Developer Experience",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};
