import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import ClientProvider from "./store/ClientProvider";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderSlider from "./components/HeaderSlider/HeaderSlider";
import ProductsList from "./components/ProductsList/ProductsList";
import HomePage from "./components/HomePage/HomePage";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LeoShop",
  description: "Leoshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
        precedence="default"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        precedence="default"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        precedence="default"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <ClientProvider>
          <Navbar />
          <Sidebar />
          <HomePage />
        </ClientProvider>
        <div className="container">
          {/* <HeaderSlider /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
