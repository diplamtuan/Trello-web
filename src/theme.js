import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
const APP_HEADER_HEIGHT = "58px";
const APP_BOARD_HEIGHT = "60px";
const APP_BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_HEADER_HEIGHT} - ${APP_BOARD_HEIGHT})`;
const HEADER_COLUMN_HEIGHT = "48px";
const FOOTER_COLUMN_HEIGHT = "52px";
export const theme = extendTheme({
  trello: {
    appHeaderHeight: APP_HEADER_HEIGHT,
    appBoardHeight: APP_BOARD_HEIGHT,
    appBoardContentHeight: APP_BOARD_CONTENT_HEIGHT,
    headerColumnHeight: HEADER_COLUMN_HEIGHT,
    footerColumnHeight: FOOTER_COLUMN_HEIGHT,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            // color: theme.palette.primary.main,
          },
          "& fieldset": {
            borderWidth: "0.1px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {},
    },
    MuiTypography: {
      styleOverrides: {
        root: {},
        h6: {
          fontSize: "1.2rem",
        },
        body1: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            // borderColor: theme.palette.primary.main,
            borderWidth: "1px",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            // borderColor: theme.palette.primary.main,
            borderWidth: "1px",
          },
          // color: theme.palette.primary.main,
          fontSize: "0.85rem",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "10px",
            height: "5px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#99BC85",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#BFD8AF",
          },
        },
      },
    },
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: {
    //       main: "#7E2553",
    //     },
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: {
    //       main: "#ED7D31",
    //     },
    //   },
    // },
  },
});
