import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import WorkSpaces from "./Workspaces";
import Recent from "./Recent";
import Starred from "./Starred";
import Templates from "./Templates";

function LeftMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
  );

  return (
    <Box sx={{ display: { lg: "none", sx: "block" } }}>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          left="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </Box>
  );
}

export default LeftMenu;
