import { Poppins } from "next/font/google";
import './globals.css';
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CalendlyContextProvider from "./CalendlyContext";
import CalendlyModal from "@/components/calendlyModal";
import MobileMenuContextProvider from "./MobileMenuContext";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata = {
  title: "Eva Perlay coaching, training",
  description: "Szakmai partnert keresel új célok eléréséhez? Vezetői és HR tréningek, most konzultációval a sikeres indulásért.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <GoogleTagManager gtmId="GTM-M8R4S2LK" />
        <GoogleAnalytics gaId="G-PWVPSEM48X" />
        <CalendlyContextProvider>
          <MobileMenuContextProvider>
          <body className={`${poppins.variable} text-poppins bg-[--white]`}>
            <Navbar />
              {children}
            <Footer />
            <CalendlyModal />
          </body>
          </MobileMenuContextProvider>
        </CalendlyContextProvider>
    </html>
  );
}
