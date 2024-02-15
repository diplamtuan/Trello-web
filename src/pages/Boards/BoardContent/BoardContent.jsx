import ListComlumns from "./ListColumns/ListComlumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
function Index({ board }) {
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10,
  //   },
  // });
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
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

  // Tạo State cho DragOverPlay

  const [activeDragOverId, setActiveDragOverId] = useState(null);
  const [activeDragOverType, setActiveDragOverType] = useState(null);
  const [activeDragOverData, setActiveDragOverData] = useState(null);
  useEffect(() => {
    setOrderedColumns(mapOrder(columns, board.columnOrderIds, "_id"));
  }, [board, columns]);

  const handleDragStart = (event) => {
    setActiveDragOverId(event?.active?.id);
    setActiveDragOverType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragOverData(event?.active?.data?.current);
  };

  const handleDragend = (event) => {
    const { active, over } = event;
    if (!over?.id) return;

    if (active?.id !== over?.id) {
      // Tìm index của active id trong mảng
      const oldIndex = orderedColumns.findIndex((c) => c._id === active?.id);

      // Tìm index của over id trong mảng
      const newIndex = orderedColumns.findIndex((c) => c._id === over?.id);

      const newArray = arrayMove(orderedColumns, oldIndex, newIndex);
      setOrderedColumns(newArray);

      // Trả về mảng giá trị id của orderedColumn sau khi drag
      // Mốt call API trả mảng này đi
      // const idOrderedColumnAfterDrag = newArray.map((c) => c._id);
    }
    setActiveDragOverId(null);
    setActiveDragOverType(null);
    setActiveDragOverData(null);
  };

  return (
    <DndContext
      onDragEnd={handleDragend}
      sensors={sensors}
      onDragStart={handleDragStart}
    >
      <ListComlumns columns={orderedColumns} />

      <DragOverlay dropAnimation={customDropAnimation}>
        {activeDragOverType ? (
          activeDragOverType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? (
            <Column column={activeDragOverData} />
          ) : (
            <Card card={activeDragOverData} />
          )
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Index;
