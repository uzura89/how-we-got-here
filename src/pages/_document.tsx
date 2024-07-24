import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KKYF2JDDB7"
        ></Script>
        <Script>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-KKYF2JDDB7');    
        `}
        </Script>

        {/* Hotjar */}

        <Script>
          {`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5070605,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');    
`}
        </Script>
      </Head>
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
