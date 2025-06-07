import { baseMetadata } from "./base";

export const educationMetadata = {
  ...baseMetadata,
  title: "Education – Kuntal | Backend Developer Learning Path",
  description: "Explore Kuntal's educational background, certifications, and relevant academic achievements in computer science and backend development.",
  alternates: {
    canonical: "https://kuntals-portfolio.vercel.app/education",
  },
  openGraph: {
    title: "Education – Kuntal",
    description: "Kuntal's academic background and learning journey as a backend developer.",
    url: "https://kuntals-portfolio.vercel.app/education",
    siteName: "Kuntal's Portfolio",
    images: [
      {
        url: "https://kuntals-portfolio.vercel.app/assets/images/Kuntal's_Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Kuntal Education",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};
