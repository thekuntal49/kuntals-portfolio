export const baseMetadata = {
  applicationName: "Kuntal's Portfolio",
  creator: "Kuntal",
  publisher: "Kuntal",
  metadataBase: new URL("https://kuntals-portfolio.vercel.app"),
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/assets/favicon/favicon.ico",
    shortcut: "/assets/favicon/favicon-96x96.png",
    apple: "/assets/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/assets/favicon/favicon.svg",
      },
    ],
  },
  metadataLocale: "en",
  category: "Portfolio",
  authors: [{ name: "Kuntal", url: "https://kuntals-portfolio.vercel.app" }],
  manifest: "/assets/favicon/site.webmanifest",
};
