import "./globals.css";
import ThemeProviderClient from "@/components/ThemeProviderClient";

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
        </ThemeProviderClient>
      </body>
    </html>
  );
}
