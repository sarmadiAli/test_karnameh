import createEmotionCache from 'src/createEmotionCache';
import type { AppContext, AppProps } from 'next/app';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import makeTheme from 'src/styles/makeTheme';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CssBaseline } from '@mui/material';
import './../styles/globals.css';
import App from 'next/app';
import HeaderComponent from 'src/components/header';

const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  pageConfig: {
    headerTitle: string;
  };
}
export default function MyApp({
  Component,
  pageProps,
  ...rest
}: CustomAppProps) {
  const { theme } = makeTheme();

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });
  return (
    <CacheProvider value={{ ...clientSideEmotionCache, ...cacheRtl }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderComponent title={rest?.pageConfig?.headerTitle} />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    pageProps: appProps,
    pageConfig:
      appContext.Component?.setPageConfig ?? appContext.ctx?.setPageConfig,
  };
};
