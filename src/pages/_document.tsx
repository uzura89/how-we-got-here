import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <div className="container mx-auto px-4">
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </div>
      </body>
    </Html>
  );
}

import Script from "next/script";
import { Fragment } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}
