import { Inter } from "next/font/google";
import "./globals.css";
import Header from './_header/page';
import Footer from "./_footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BhavikPortfolio",
  description: "",
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
