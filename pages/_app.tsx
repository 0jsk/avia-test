import { GlobalStyles, theme } from '@app/assets';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
