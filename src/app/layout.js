import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
    title: "Cotizaciones",
    description: "Tp 6",
};

const montserrat = Montserrat({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Arial", "sans-serif"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="overflow-x-hidden">
            <body
                className={`text-pink-800 ${montserrat.className} absolute top-0 z-[-2] flex flex-col justify-between   w-full transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]   `}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
