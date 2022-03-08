import type { AppProps } from 'next/app';
import Script from 'next/script';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from '../utils/theme';
import theme from '../utils/theme/theme';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.family.body};
    font-weight: 400;
  }

  @font-face{
    font-family: 'Azonix';
    src: url("fonts/Azonix.otf")
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

            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
