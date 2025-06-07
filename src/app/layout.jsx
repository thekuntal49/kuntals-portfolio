import { SearchBar } from "@/components/global/SearchBar";
import "./globals.css";
import { Toaster } from "@/components/global/Toaster";
import { ThemeProvider } from "@/theme/ThemeContext";
// import { layoutMetadata } from "../../config/seo/layout";
import { Inter } from "next/font/google";
import { Tabs } from "@/components/global/Tabs";

// export const metadata = layoutMetadata;

export const viewport = "width=device-width, initial-scale=1.0";
export const themeColor = "#ffffff";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={inter.className}>
      <body className="min-h-screen antialiased scroll-smooth">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "CodeSena",
                url: "https://www.codesena.site",
                logo: "https://res.cloudinary.com/dnr5rs7ij/image/upload/v1745468263/social-clubs/posts/logo.webp",
                sameAs: [
                  "https://www.youtube.com/@codesena_dev",
                  "https://www.instagram.com/codesena.dev",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "CodeSena",
                url: "https://www.codesena.site",
                alternateName: "codesena.site",
              },
            ]),
          }}
        />

        <ThemeProvider>
          <SearchBar />
          <Tabs />
          {/* <ScrollToTop /> */}
          <main className="flex-grow">{children}</main>
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
