import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { Card as MuiCard } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
function Card({ card }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card._id, data: { ...card } });

  const dndKitCardStyles = {
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };
  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        overflow: "unset",
        display: card?.FE_PlaceholderCard ? "none" : "block",
      }}
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
    >
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
          title="green iguana"
        />
      )}
      <CardContent
        sx={{
          padding: "10px 16px",
          "&:last-child": {
            padding: "10px 16px",
          },
        }}
      >
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
            fontWeight: "bold",
          }}
        >
          {card?.title}
        </Typography>
      </CardContent>
      {(!!card?.memberIds?.length ||
        !!card?.attachments?.length ||
        !!card?.comments?.length) && (
        <CardActions sx={{ padding: "0 4px" }}>
          <Button
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
            }}
            startIcon={<GroupIcon />}
            size="small"
          >
            {card?.memberIds?.length}
          </Button>
          <Button
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
            }}
            startIcon={<CommentIcon />}
            size="small"
          >
            {card?.comments?.length}
          </Button>
          <Button
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
            }}
            startIcon={<AttachmentIcon />}
            size="small"
          >
            {card?.attachments?.length}
          </Button>
        </CardActions>
      )}
    </MuiCard>
  );
}

export default Card;
