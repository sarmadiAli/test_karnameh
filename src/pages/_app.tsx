import createEmotionCache from 'src/createEmotionCache';
import type { AppProps } from 'next/app';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import makeTheme from 'src/styles/makeTheme';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CssBaseline } from '@mui/material';
import './../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = makeTheme();

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });
  return (
    <CacheProvider value={{ ...clientSideEmotionCache, ...cacheRtl }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
