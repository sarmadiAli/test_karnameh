import { Theme, createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1280,
  xl: 1920,
};

const createdBreakpoints = createBreakpoints({ values: breakpoints });
const mobileMediaQuery = createdBreakpoints.down('md');

const createFontSize = (desktopSize: number, mobileSize: number) => ({
  fontSize: desktopSize,
  [mobileMediaQuery]: { fontSize: mobileSize },
});

const makeTheme = (): { theme: Theme } => {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#27AE60',
      },
      secondary: {
        main: '#46314E',
      },
      warning: {
        main: '#FFA24C',
      },
      error: {
        main: '#FF5875',
        light: '#CF7878',
      },

      info: {
        main: '#2196f3',
        dark: '#2145FF',
      },
      success: {
        main: '#37B86D',
      },
      divider: 'rgba(28, 27, 32, 20%)',
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: 'rgba(0, 0, 0, 0.87)',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.30)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
    },
    typography: {
      fontFamily: ['iransans', 'sans-serif'].join(','),
      fontSize: 16,
      htmlFontSize: 16,
      fontWeightRegular: 400,
      fontWeightBold: 700,

      [createdBreakpoints.down('md')]: {
        fontSize: 14,
        htmlFontSize: 14,
      },

      h1: {
        ...createFontSize(32, 24),
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#1C1B20',
      },
      h2: {
        ...createFontSize(28, 20),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20',
      },
      h3: {
        ...createFontSize(27, 20),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20',
      },
      h4: {
        ...createFontSize(26, 19),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20',
      },
      h5: {
        ...createFontSize(25, 19),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20',
      },
      h6: {
        ...createFontSize(24, 18),
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1C1B20',
      },
      subtitle1: {
        ...createFontSize(24, 18),
        fontWeight: 500,
        color: '#1C1B20',
      },
      subtitle2: {
        ...createFontSize(20, 16),
        fontWeight: 500,
        color: '#1C1B20',
      },
      body1: {
        ...createFontSize(18, 16),
        fontWeight: 400,
        lineHeight: 1.8,
        color: '#1C1B20B2',
      },
      body2: {
        ...createFontSize(16, 14),
        fontWeight: 400,
        lineHeight: 1.8,
        color: '#1C1B2066',
      },
      caption: {
        fontSize: 14,
        fontWeight: 400,
        color: '#1C1B2066',
      },
      overline: {
        fontSize: 12,
        fontWeight: 400,
        color: '#1C1B2066',
      },
      button: { ...createFontSize(16, 14), fontWeight: 700 },
    },
    shape: {
      borderRadius: 2,
    },
    direction: 'rtl',
    spacing: 8,
    zIndex: {
      mobileStepper: 1000,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: breakpoints,
    },
  });
  theme = createTheme(theme, {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            direction: 'ltr',
            textAlign: 'left',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '0.875rem 2rem',
            '&.Mui-disabled': {
              color: theme.palette.primary.main,
            },
          },
          contained: {
            color: '#fff',
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            border: 'none',
            padding: '0.5rem 0',
            boxShadow: 'none',
            borderRadius: 0,
            '&.Mui-expanded': {
              margin: 0,
            },
          },
        },
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            color: 'rgba(28, 27, 32, 0.4)',
            '.MuiPaginationItem-root.Mui-selected': {
              background: 'transparent',
              border: '1px solid #000',
            },
          },
        },
      },
    },
  });

  return {
    theme,
  };
};

export default makeTheme;
