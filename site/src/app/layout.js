import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/header/header";
import Footer from "@/component/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "In-Apple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
