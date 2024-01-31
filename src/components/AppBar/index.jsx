import ModeSelect from "~/components/ModeSelect";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import TrelloIcon from "~/assets/trello.svg?react";
import Typography from "@mui/material/Typography";
import WorkSpaces from "./Menu/Workspaces";
import Templates from "./Menu/Templates";
import Starred from "./Menu/Starred";
import Recent from "./Menu/Recent";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";
import Profile from "./Menu/Profile";
import Button from "@mui/material/Button";
import LeftMenu from "./Menu/LeftMenu";
function index() {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appHeaderHeight,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: { xs: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AppsIcon sx={{ color: "primary.main" }} />
        {/* Trello Icon */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          {/* WorkSpaces */}
          <WorkSpaces />

          {/* Recent */}
          <Recent />

          {/* Starred */}
          <Starred />

          {/* Templates */}
          <Templates />
          {/* Create */}
          <Button variant="outlined">Create</Button>
        </Box>
        {/* Menu Left in Responesive */}
        <LeftMenu />
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{ minWidth: "120px" }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="primary" variant="dot">
            <NotificationsIcon
              sx={{ color: "primary.main", cursor: "pointer" }}
            />
          </Badge>
        </Tooltip>

        {/* Help */}
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "primary.main", cursor: "pointer" }} />
        </Tooltip>
        {/* Avatar */}
        <Profile />
      </Box>
    </Box>
  );
}

export default index;
