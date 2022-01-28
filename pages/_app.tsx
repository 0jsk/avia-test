import { GlobalStyles, theme } from '@app/assets';
import { fork, serialize } from 'effector';
import type { AppProps } from 'next/app';
import { Provider } from 'effector-react/scope';
import type { Scope } from 'effector';
import { ThemeProvider } from 'styled-components';

let clientScope: Scope;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const scope = fork({
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState
    }
  });

  if (typeof window !== 'undefined') clientScope = scope;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Provider value={scope}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
