import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initViewportSize } from "@/utils/responsive";
import { useEffect } from "react";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initViewportSize();
    window.addEventListener("resize", initViewportSize);
    () => {
      window.removeEventListener("resize", initViewportSize);
    };
  }, []);

  return (
    <>
      <AppBar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
