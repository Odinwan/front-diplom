import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import '../../styles/global.scss';

import createEmotionCache from '@/utils/createEmotionCache';
import theme from '@/utils/muiTheme';
import withGlobalContext, { WithGlobalContextContextData } from '@/contexts/withGlobalContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { clientServerDetector } from '@/services/clientServerDetector';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type Props = WithGlobalContextContextData<MyAppProps>

const clearApp = async () => {
  await localStorage.removeItem('token');
};

const MyApp = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const { globalContextState } = props;
  const { isAuth } = globalContextState;
  const token = clientServerDetector().isClient() && localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      router.push('/LogIn');
      return;
    }

    router.push('/home');

    return () => {
      clearApp().then(() => console.log('token has been deleted'));
    };
  }, [isAuth]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default withGlobalContext(MyApp);
