import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';

export const theme = extendTheme({
  // styles: {
  //   global: {
  //     'html, body': {
  //       background: 'Light3'
  //     },
  //     body: {
  //       fontFamily: 'var(--font-euclid-circular-b)'
  //     }
  //   }
  // },

  initialColorMode: 'light',
  useSystemColorMode: false,
  colors,
  components
});

export const currentTheme = (mode) => {
  const theme_obj = { ...theme, theme_name: mode };
  return extendTheme({
    ...theme_obj,
    theme: { name: mode },
    colors: colors[mode] || colors.default
  });
};
