import { baseMetadata } from "./base";

export const contactMetadata = {
  ...baseMetadata,
  title: "Contact – Kuntal | Hire Backend Developer",
  description: "Get in touch with Kuntal — a Node.js backend developer available for projects, internships, or job opportunities in web development.",
  alternates: {
    canonical: "https://kuntals-portfolio.vercel.app/contact",
  },
  openGraph: {
    title: "Contact – Kuntal",
    description: "Reach out to Kuntal for backend development roles or collaborations.",
    url: "https://kuntals-portfolio.vercel.app/contact",
    siteName: "Kuntal's Portfolio",
    images: [
      {
        url: "https://kuntals-portfolio.vercel.app/assets/images/Kuntal's_Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Kuntal – Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
