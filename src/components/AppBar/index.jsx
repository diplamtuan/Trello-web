import ModeSelect from "../../components/ModeSelect";
import Box from "@mui/material/Box";

function index() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appHeaderHeight,
        width: "100%",
        backgroundColor: "primary.light",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default index;
