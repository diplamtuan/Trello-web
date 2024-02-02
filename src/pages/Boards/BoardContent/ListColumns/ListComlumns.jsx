import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
function ListComlumns({ columns }) {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBoardContentHeight,
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
      }}
    >
      <Box
        sx={{
          display: "flex",
          overflowY: "hidden",
          overflowX: "auto",
          padding: "10px 0",
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
        {/* Column 1 */}
        {columns.map((column) => (
          <Column key={column._id} column={column} />
        ))}
        {/* Add New Column */}
        <Box
          sx={{
            maxWidth: "200px",
            minWidth: "200px",
            height: "fit-content",
          }}
        >
          <Button
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "#7E2553" : "white",
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? "#FFD0EC"
                  : "rgb(237 125 49 / 93%)",
              "&:hover": {
                color: (theme) =>
                  theme.palette.mode === "light" ? "white" : "black",
              },
              width: "100%",
              height: "100%",
            }}
            startIcon={<NoteAddIcon />}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ListComlumns;
