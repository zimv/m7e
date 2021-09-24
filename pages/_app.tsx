import { NextIntlProvider } from 'next-intl';
import Script from 'next/script';
import Web3ModalProvider from '../components/web3modal';

import 'tailwindcss/tailwind.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider
      // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      // Providing an explicit value for `now` ensures consistent formatting of
      // relative values regardless of the server or client environment.
      now={new Date(pageProps.now)}
      // Also an explicit time zone is helpful to ensure dates render the
      // same way on the client as on the server, which might be located
      // in a different time zone.
      timeZone="Asia/ShangHai"
    >
      <Web3ModalProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N79EFJ7LL1" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-N79EFJ7LL1'); `,
          }}
        ></Script>
        <Component {...pageProps} />
      </Web3ModalProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
