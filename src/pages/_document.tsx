// Error because of case sensitivity in the folr
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pl">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/*  eslint-disable-next-line @next/next/no-page-custom-font*/}
                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
