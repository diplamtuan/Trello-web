import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import AddCardIcon from "@mui/icons-material/AddCard";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ListCards from "./ListCards/ListCards";
import { mapOrder } from "~/utils/sorts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
function Column({ column }) {
  const { cards } = column;
  const cardsOrdered = mapOrder(cards, column.cardOrderIds, "_id");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: column._id, data: { ...column } });

  const dndKitColumnStyles = {
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes}
      {...listeners}
      sx={{
        margin: "0 10px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        minWidth: "300px",
        height: "fit-content",
        backgroundColor: "#FDF0D1",
        // padding: "0 10px",
      }}
    >
      {/* Header Box */}
      <Box
        sx={{
          display: "flex",
          padding: "8px 16px",
          alignItems: "center",
          justifyContent: "space-between",
          height: (theme) => theme.trello.headerColumnHeight,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
          }}
        >
          {column?.title}
        </Typography>
        <Box>
          <ExpandMoreIcon
            id="basic-button-column-dropdown"
            aria-controls={open ? "basic-column-dropdown" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
              cursor: "pointer",
            }}
          />
          <Menu
            id="basic-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button-column-dropdown",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add New Card</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCopyIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentPasteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Past</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete this column</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archie this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* List Box */}
      <ListCards cards={cardsOrdered} />
      {/* Footer Box */}
      <Box
        sx={{
          display: "flex",
          padding: "8px 16px",
          alignItems: "center",
          justifyContent: "space-between",
          height: (theme) => theme.trello.footerColumnHeight,
        }}
      >
        <Button
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
          }}
          startIcon={<AddCardIcon />}
        >
          Add new card
        </Button>
        <Tooltip title="Drag move column">
          <DragHandleIcon
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Column;
