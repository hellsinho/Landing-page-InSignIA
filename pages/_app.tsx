// pages/_app.tsx
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="img/favicon/favicon.ico" /> {/* Adicione o favicon aqui */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;