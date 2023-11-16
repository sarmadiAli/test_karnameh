import { Theme, createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1366,
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
        main: '#9CAEBB',
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
      subtitle1: {
        ...createFontSize(24, 14),
        fontWeight: 800,
      },
      subtitle2: {
        ...createFontSize(16, 14),
        fontWeight: 700,
      },
      body1: {
        ...createFontSize(14, 12),
        fontWeight: 400,
        lineHeight: 1.8,
      },
      body2: {
        ...createFontSize(24, 14),
        lineHeight: 1.8,
        color: '#1C1B2066',
      },
      caption: {
        ...createFontSize(12, 10),
        fontWeight: 400,
        color: '#777',
      },
      h6: {
        ...createFontSize(12, 10),
        fontWeight: 700,
      },
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
            // fontWeight: 700,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '8px 21px',
            borderRadius: '6px',
            '&.Mui-disabled': {
              color: theme.palette.primary.main,
            },
            '&.karnamehBtnfeedBack': {
              padding: '8px 21px',
              border: '1px solid #E4E9EC',
              '& :hove': {
                backgroundColor: 'red',
              },
            },
          },
          contained: {
            color: '#fff',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#454545',
            fontWeight: 700,
            fontSize: '12px',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            // this is styles for the new variants
            '&.karnameTextFeild': {
              background: '#fff',
              borderRadius: '6px',
              '& input': {
                padding: '12px 16px',
              },
              '& fieldset': {
                borderRadius: '6px',
                borderWidth: '1px !important',
                borderColor: '#e4e9ec !important',
              },
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
