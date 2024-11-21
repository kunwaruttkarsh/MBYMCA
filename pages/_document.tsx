import { Html, Head, Main, NextScript } from "next/document";
import microbird from "../public/microbird.png";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel='icon' href='/microbird.png' />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
