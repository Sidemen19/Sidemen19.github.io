import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link href="/static/favicon.ico" rel="shortcut icon" />
                    <link href="/static/site.webmanifest" rel="manifest" />
                    <link
                        href="/static/favicon.ico"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                </Head>

                <body className="dark:text-white bg-amber-50/40 dark:bg-soft-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
