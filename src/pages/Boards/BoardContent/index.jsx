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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
const HEADER_COLUMN_HEIGHT = "48px";
const FOOTER_COLUMN_HEIGHT = "52px";
function Index() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBoardContentHeight,
        width: "100%",
        display: "flex",
        gap: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
        overflowY: "hidden",
        overflowX: "auto",
      }}
    >
      {/* Column 1 */}
      <Box
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
            height: `${HEADER_COLUMN_HEIGHT}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
            }}
          >
            Column Title
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
              )} - ${HEADER_COLUMN_HEIGHT} - ${FOOTER_COLUMN_HEIGHT})`,
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
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>

          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>

          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>

          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>

          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
        </Box>

        {/* Footer Box */}
        <Box
          sx={{
            display: "flex",
            padding: "8px 16px",
            alignItems: "center",
            justifyContent: "space-between",
            height: `${FOOTER_COLUMN_HEIGHT}`,
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
      {/* Column 1 */}
      <Box
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
            height: `${HEADER_COLUMN_HEIGHT}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
            }}
          >
            Column Title
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
              )} - ${HEADER_COLUMN_HEIGHT} - ${FOOTER_COLUMN_HEIGHT})`,
            overflowY: "auto",
            overflowX: "hidden",
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#AC7D88",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {},
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#85586F",
            },
          }}
        >
          {/* Card */}
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
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
          </Card>
          <Card sx={{ maxWidth: 345, overflow: "unset" }}>
            <CardContent
              sx={{
                padding: "10px 16px",
                "&:last-child": {
                  padding: "10px 16px",
                },
                overFlow: "unset",
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
          </Card>
        </Box>

        {/* Footer Box */}
        <Box
          sx={{
            display: "flex",
            padding: "8px 16px",
            alignItems: "center",
            justifyContent: "space-between",
            height: `${FOOTER_COLUMN_HEIGHT}`,
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
    </Box>
  );
}

export default Index;
