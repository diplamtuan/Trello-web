import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
export const theme = extendTheme({
  trello: {
    appHeaderHeight: "58px",
    appBoardHeight: "60px",
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
        root: ({ theme }) => ({
          "& label": {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
        }),
        root: ({ theme }) => ({
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.primary.main,
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.primary.main,
            borderWidth: "1px",
          },
          color: theme.palette.primary.main,
          fontSize: "0.85rem",
        }),
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
    light: {
      palette: {
        primary: {
          main: "#7E2553",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#ED7D31",
        },
      },
    },
  },
});
