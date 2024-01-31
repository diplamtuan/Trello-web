import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
export const theme = extendTheme({
  trello: {
    appHeaderHeight: "58px",
    appBoardHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ff5252",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});
