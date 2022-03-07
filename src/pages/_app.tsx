import type { AppProps } from 'next/app';
import Script from 'next/script';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    font-family: 'Merriweather', sans-serif;
    font-weight: 400;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* GOOGLE ANALYTICS */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-ZE9LYXPGV9"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'GA_MEASUREMENT_ID');
                `}
            </Script>
            {/* GOOGLE ANALYTICS END*/}

            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
