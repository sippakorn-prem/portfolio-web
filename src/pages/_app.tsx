import '@/styles/reset.css';
import '@/styles/theme.css';
import Head from 'next/head';
import store from '@/store/store';
import Header from '@/components/Header';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { brown, grey } from '@mui/material/colors';

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          color: grey[800],
        },
      },
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
    },
    typography: {
      fontFamily: 'Quicksand, Roboto, sans-serif',
    },
  })
);

function displayAsciiArtInConsole(): void {
  const asciiArt = `
░██████╗██╗██████╗░██████╗░░█████╗░██╗░░██╗░█████╗░██████╗░███╗░░██╗░░░██████╗░░█████╗░░██████╗░███████╗
██╔════╝██║██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔══██╗██╔══██╗████╗░██║░░░██╔══██╗██╔══██╗██╔════╝░██╔════╝
╚█████╗░██║██████╔╝██████╔╝███████║█████═╝░██║░░██║██████╔╝██╔██╗██║░░░██████╔╝███████║██║░░██╗░█████╗░░
░╚═══██╗██║██╔═══╝░██╔═══╝░██╔══██║██╔═██╗░██║░░██║██╔══██╗██║╚████║░░░██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██████╔╝██║██║░░░░░██║░░░░░██║░░██║██║░╚██╗╚█████╔╝██║░░██║██║░╚███║██╗██║░░░░░██║░░██║╚██████╔╝███████╗
╚═════╝░╚═╝╚═╝░░░░░╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝`;

  console.log(
    `\n\n%c${asciiArt}\n\n%cGenerate by fsymbols\n\n`,
    `color: ${brown[300]};`,
    `color: ${brown[300]};font-size: 14px;`
  );
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(displayAsciiArtInConsole, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="height=device-height, width=device-width, initial-scale=1.0"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
