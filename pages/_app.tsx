import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import "../assets/fonts/custom-devicon/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ChaMatt | Fullstack Developer</title>
        <meta
          name="description"
          content="Hi! I am Matheus Vicente, a Fullstack Developer specialized in React and React Native."
        />
        <meta
          name="keywords"
          content="React, React Native, Fullstack, Frontend, Backend, Node.js, HTML, CSS, JavaScript"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
