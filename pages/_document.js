import Document, { Html, Head, Main, NextScript } from "next/document";

// function mailerlite() {
//   var ml_webform_4496056 = ml_account("webforms", "4496056", "k2q3g9", "load");
//   ml_webform_4496056("animation", "fadeIn");
// }

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script async src="/ml.js">
            {/* {mailerlite()} */}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
