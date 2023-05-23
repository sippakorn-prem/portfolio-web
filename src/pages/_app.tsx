import '@/styles/reset.css';
import '@/styles/theme.css';
import Head from 'next/head';
import store from '@/store/store';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { grey } from '@mui/material/colors';
import { motion, useScroll } from 'framer-motion';

const SetBackgroundState = dynamic(() => import('@/components/SetBackgroundState'));

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
    `color: ${grey[300]};`,
    `color: ${grey[300]};font-size: 14px;`
  );
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const { scrollYProgress } = useScroll();
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
        <motion.div className="scroll-progress-bar" style={{ scaleX: scrollYProgress }} />
        <SetBackgroundState />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
