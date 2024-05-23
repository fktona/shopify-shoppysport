import { Montserrat } from "next/font/google";
import "./globals.css";
import  ShopProvider  from "./context/shopContext";
import Layout from "../components/Layout";
import MenuProvider from "./context/menuContext";
import ScrollProvider from "./context/scroll";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ShoppySport",
  description: "sport gear and accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProvider>
        <MenuProvider>
        <ShopProvider >
          <Layout>
        {children}
          </Layout>
        </ShopProvider>
        </MenuProvider>
        </ScrollProvider>
        </body>
    </html>
  );
}
