import ListComlumns from "./ListColumns/ListComlumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

function Index({ board }) {
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10,
  //   },
  // });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 0,
      tolerance: 500,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  const { columns } = board;
  const [orderedColumns, setOrderedColumns] = useState([]);
  useEffect(() => {
    setOrderedColumns(mapOrder(columns, board.columnOrderIds, "_id"));
  }, [board, columns]);
  const handleDragend = (event) => {
    const { active, over } = event;
    if (!over.id) return;

    if (active.id !== over.id) {
      // Tìm index của active id trong mảng
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);

      // Tìm index của over id trong mảng
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      const newArray = arrayMove(orderedColumns, oldIndex, newIndex);
      setOrderedColumns(newArray);

      // Trả về mảng giá trị id của orderedColumn sau khi drag
      // Mốt call API trả mảng này đi
      // const idOrderedColumnAfterDrag = newArray.map((c) => c._id);
    }
  };
  return (
    <DndContext onDragEnd={handleDragend} sensors={sensors}>
      <ListComlumns columns={orderedColumns} />
    </DndContext>
  );
}

export default Index;
