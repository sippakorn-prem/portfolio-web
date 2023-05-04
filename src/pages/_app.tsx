// _app.tsx

import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import store from '@/store/store';
import '@/styles/reset.css';
import '@/styles/theme.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
