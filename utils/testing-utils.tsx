import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { render } from '@testing-library/react';
import makeTheme from 'src/styles/makeTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createEmotionCache from 'src/createEmotionCache';
import { CacheProvider } from '@emotion/react';
export const renderWithProviders = (component: any) => {
  const queryClient = new QueryClient();
  const { theme } = makeTheme();
  const clientSideEmotionCache = createEmotionCache();

  return render(
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={{}}>{component}</Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
