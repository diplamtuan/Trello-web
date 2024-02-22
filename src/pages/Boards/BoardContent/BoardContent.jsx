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
  closetCenter,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
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
  // findColumnByCardId
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) =>
      column.cards.map((card) => card._id).includes(cardId)
    );
  };
  // HandleDragStar
  const handleDragStart = (event) => {
    setActiveDragOverId(event?.active?.id);
    setActiveDragOverType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragOverData(event?.active?.data?.current);
  };
  const handleDragOver = (event) => {
    if (activeDragOverType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return;
    }
    // console.log("HandleDragOver ", event);
    const { active, over } = event;

    if (!active?.id || !over?.id) return;

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    const { id: overCardId } = over;

    // Tìm 2 column của cardActive và cardOver
    const activeColumn = findColumnByCardId(activeDraggingCardId);
    const overColumn = findColumnByCardId(overCardId);

    if (!activeColumn || !overColumn) return;

    // Nếu activeColumn và overColumn khác nhau
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns((prevColumn) => {
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        );
        let newCardIndex;
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1;

        // Clone dữ liệu mới để không ảnh hưởng
        const nextColumns = cloneDeep(prevColumn);
        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        );

        if (nextActiveColumn) {
          // Xóa card đang dragging ở columnActive
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );
          // Cập nhật lại mảng OrderIds
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }
        if (nextOverColumn) {
          // Kiểm tra xem card đang kéo có nằm ở column kia hay không và xóa đi
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          // Thêm card đang kéo vào overColumn theo vi tri index mới
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          );
          // Cập nhật mảng orderIds
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        return nextColumns;
      });
    }
  };
  // HandleDragEnd
  const handleDragend = (event) => {
    if (activeDragOverType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      return;
    }
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
      sensors={sensors}
      collisionDetection={closetCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragend}
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
