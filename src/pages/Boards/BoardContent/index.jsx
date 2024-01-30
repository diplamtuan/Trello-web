import Box from "@mui/material/Box";

function index() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appHeaderHeight} - ${theme.trello.appBoardHeight})`,
        width: "100%",
      }}
    >
      Board Content
    </Box>
  );
}

export default index;
