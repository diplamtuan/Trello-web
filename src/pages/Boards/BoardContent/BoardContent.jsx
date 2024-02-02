import ListComlumns from "./ListColumns/ListComlumns";
import { mapOrder } from "~/utils/sorts";

function Index({ board }) {
  const { columns } = board;
  const columnsOrdered = mapOrder(columns, board.columnOrderIds, "_id");
  return <ListComlumns columns={columnsOrdered} />;
}

export default Index;
