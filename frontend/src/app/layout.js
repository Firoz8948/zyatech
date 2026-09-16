import "./globals.css";

export const metadata = {
  title: "Zyatech Private Limited | Innovative Technology Solutions",
  description:
    "Zyatech Private Limited builds innovative digital products that simplify everyday life. Explore our solutions including LalganjEats.",
  keywords: "Zyatech, technology, LalganjEats, food delivery, digital solutions, India",
  authors: [{ name: "Zyatech Private Limited" }],
  openGraph: {
    title: "Zyatech Private Limited",
    description: "Innovative Technology Solutions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
