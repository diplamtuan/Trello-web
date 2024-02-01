import ModeSelect from "~/components/ModeSelect/ModeSelect";
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
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
function Index() {
  const [searchValue, setSearchValue] = useState("");
  const inputSearchRef = useRef(null);
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
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#ED7D31" : "#7E2553",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AppsIcon sx={{ color: "white" }} />
        {/* Trello Icon */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            sx={{
              color: "white",
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
          <Button sx={{ color: "white" }} startIcon={<AddToPhotosIcon />}>
            Create
          </Button>
        </Box>
        {/* Menu Left in Responesive */}
        <LeftMenu />
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          ref={inputSearchRef}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            "& label": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              color: "white",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },

              "& fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon
                  fontSize="small"
                  sx={{ color: searchValue ? "white" : "transparent" }}
                  onClick={() => {
                    setSearchValue("");
                    inputSearchRef.current.querySelector("input").focus();
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge
            sx={{ ".MuiBadge-badge": { backgroundColor: "white" } }}
            variant="dot"
          >
            <NotificationsIcon sx={{ color: "white", cursor: "pointer" }} />
          </Badge>
        </Tooltip>

        {/* Help */}
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "white", cursor: "pointer" }} />
        </Tooltip>
        {/* Avatar */}
        <Profile />
      </Box>
    </Box>
  );
}

export default Index;
