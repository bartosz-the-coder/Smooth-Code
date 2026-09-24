import Document, { Html, Head, Main, NextScript } from 'next/document';
import { themeBootstrapScript } from 'components/theme-switch/utils/theme-bootstrap';

export default class SmoothDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
