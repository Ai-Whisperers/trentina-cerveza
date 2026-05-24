import CookieConsent from "@/components/CookieConsent"
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import content from "@/content/es.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteData = content.site;

export const metadata: Metadata = {
  title: "Cerveza Trentina — Cerveza artesanal paraguaya",
  description:
    "Descubrí Cerveza Trentina. Cerveza artesanal paraguaya: Lagers, IPAs, Stouts. Chopp tirado, packs y delivery.",
  keywords: [
    "cerveza artesanal Paraguay",
    "Trentina",
    "cerveza paraguaya",
    "chopp",
    "IPA Paraguay",
    "cervecería San Lorenzo",
    "cerveza artesanal San Lorenzo",
  ],
  verification: {
    google: "your-code-here",
  },
  openGraph: {
    title: "Cerveza Trentina",
    description:
      "Descubrí Cerveza Trentina. Cerveza artesanal paraguaya: Lagers, IPAs, Stouts. Chopp tirado, packs y delivery.",
    url: "https://trentina.paragu-ai.com",
    siteName: "Cerveza Trentina",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerveza Trentina",
    description:
      "Descubrí Cerveza Trentina. Cerveza artesanal paraguaya: Lagers, IPAs, Stouts. Chopp tirado, packs y delivery.",
  },
  alternates: {
    canonical: "https://trentina.paragu-ai.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brewery",
      name: siteData.name,
      description: siteData.description,
      url: siteData.url,
      telephone: siteData.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Mariscal López 1234",
        addressLocality: "San Lorenzo",
        postalCode: "111431",
        addressCountry: "PY",
      },
      servesCuisine: "Beer",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        bestRating: "5",
        ratingCount: "127",
      },
      image: `${siteData.url}${siteData.ogImage}`,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "17:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "18:00",
          closes: "22:00",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: siteData.name,
      description: siteData.description,
      url: siteData.url,
      telephone: siteData.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Mariscal López 1234",
        addressLocality: "San Lorenzo",
        postalCode: "111431",
        addressCountry: "PY",
      },
      image: `${siteData.url}${siteData.ogImage}`,
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "17:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "18:00",
          closes: "22:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
