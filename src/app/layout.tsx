import { PrismicPreview } from "@prismicio/next"
import "./globals.css"
import { Metadata } from "next"

import { fontSans } from "@/app/fonts"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { repositoryName } from "@/prismicio"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: {
    template: "%s | Patrick Kelly's Portfolio",
    default: "Patrick's Portfolio",
  },
  description: "Patrick Kelly's portfolio website.",
  icons: {
    icon: "/favicon.ico", //import your favicon
  },
  metadataBase: new URL("https://your-domain.com"), // Update this URL
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden bg-base-100 text-base-content antialiased">
        <ThemeProvider
          attribute="data-theme"
          enableSystem={true}
          defaultTheme="system"
          enableColorScheme={true}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </ThemeProvider>
      </body>
    </html>
  )
}
