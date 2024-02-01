import Box from "@mui/material/Box";
import Card from "./Card/Card";

function ListCards() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "0 5px",
        margin: "0 5px",
        flexDirection: "column",
        gap: 1,
        maxHeight: (theme) =>
          `calc(${theme.trello.appBoardContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.headerColumnHeight
          } - ${theme.trello.footerColumnHeight})`,
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#FF9843" : "#AC7D88",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-track": {},
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#FFDD95" : "#85586F",
        },
      }}
    >
      {/* Card */}
      <Card />
      {/* Temporay hide Media */}
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
    </Box>
  );
}

export default ListCards;
