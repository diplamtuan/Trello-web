import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mockup-data";
function Board() {
  const { board } = mockData;
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{
        height: "100vh",
      }}
    >
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  );
}

export default Board;
