import Box from "@mui/material/Box";
import Card from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListCards({ cards }) {
  return (
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          display: "flex",
          padding: "0 5px",
          margin: "0 5px",
          flexDirection: "column",
          gap: 1,
          maxHeight: (theme) =>
            `calc(${theme.trello.appBoardContentHeight} - ${theme.spacing(
              5
            )} - ${theme.trello.headerColumnHeight} - ${
              theme.trello.footerColumnHeight
            })`,
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
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
        {/* Temporay hide Media */}
      </Box>
    </SortableContext>
  );
}

export default ListCards;
