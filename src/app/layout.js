import "./globals.css";
import ThemeProviderClient from "@/components/ThemeProviderClient";
import Navigation from "@/components/Navigation";
export const metadata = {
  title: "Vitthal Humbe",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProviderClient>
          {children}
          <Navigation />
        </ThemeProviderClient>

      </body>
    </html>
  );
}
