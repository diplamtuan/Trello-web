import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { Card as MuiCard } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{ maxWidth: 345, overflow: "unset" }}>
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
            Vorke Trello MERN Stack
          </Typography>
        </CardContent>
      </MuiCard>
    );
  }
  return (
    <MuiCard sx={{ maxWidth: 345, overflow: "unset" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/78247885_789954678116542_903194303377965056_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=300f58&_nc_ohc=0uxqgE5Qvn0AX-buCTG&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfB-IeKhZ82arzrUeob-p5VtvbN4e91n1vt5ZQh0VUhEww&oe=65E2D83A"
        title="green iguana"
      />
      <CardContent
        sx={{
          padding: "10px 16px",
        }}
      >
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
            fontWeight: "bold",
          }}
        >
          Vorke Trello MERN Stack
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0 4px" }}>
        <Button
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
          }}
          startIcon={<GroupIcon />}
          size="small"
        >
          20
        </Button>
        <Button
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
          }}
          startIcon={<CommentIcon />}
          size="small"
        >
          15
        </Button>
        <Button
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
          }}
          startIcon={<AttachmentIcon />}
          size="small"
        >
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
