'use client';

import { currentTheme } from '@/theme';
import { get_hex_color_complements } from '@/theme/colors';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
    mutations: { retry: 0 }
  }
});

export function Providers({ storeThemeInfo, children }) {
  const primary_color =
    storeThemeInfo?.theme_color ||
    `#141414` ||
    `#56C3CE` ||
    `#DDB057` ||
    '#FAB702';
  const theme =
    storeThemeInfo?.theme_mode || `light` || `darkBlue` || `darkGreen`;
  const customColors = get_hex_color_complements(primary_color, theme);

  const CURRENT_THEME = currentTheme(theme);
  const custom_theme = {
    ...CURRENT_THEME,
    colors: { ...CURRENT_THEME.colors, ...customColors }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={custom_theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}
