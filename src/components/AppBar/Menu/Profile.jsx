import * as React from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? "basic-menu-workspaces" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Vorke"
            src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/364774780_1733033167142017_4197371212770652663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=WY9oxP2Mf9sAX9Dfzjj&_nc_ht=scontent.fsgn2-11.fna&cb_e2o_trans=t&oh=00_AfD4UdfkmBX4jXGhgWMoZSEsE51H7LUVQ8YwJr1GaykVlw&oe=65BFABAA"
          />
        </IconButton>
      </Tooltip>

      <Menu
        id="basic-menu-workspaces"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-workspaces",
        }}
      >
        <MenuItem>
          <Avatar sx={{ width: "30px", height: "30px", mr: 1 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: "30px", height: "30px", mr: 1 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default Profile;
