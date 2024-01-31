import Chip from "@mui/material/Chip";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
function index() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBoardHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: { xs: "auto" },
        borderBottom: `1px solid white`,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#ED7D31" : "rgb(126 37 83 / 93%);",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          icon={<LeaderboardIcon />}
          label="Dịp Lâm Tuấn MERN Stack Board"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              backgroundColor: "primary.50",
            },
            cursor: "pointer",
            fontWeight: "bold",
            paddingX: "10px",
            borderRadius: "4px",
          }}
          clickable
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private WorkSpace"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              backgroundColor: "primary.50",
            },
            cursor: "pointer",
            fontWeight: "bold",
            paddingX: "10px",
            borderRadius: "4px",
          }}
          clickable
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              backgroundColor: "primary.50",
            },
            cursor: "pointer",
            fontWeight: "bold",
            paddingX: "10px",
            borderRadius: "4px",
          }}
          clickable
        />
        <Chip
          icon={<BoltIcon />}
          label="Autimation"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              backgroundColor: "primary.50",
            },
            cursor: "pointer",
            fontWeight: "bold",
            paddingX: "10px",
            borderRadius: "4px",
          }}
          clickable
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              backgroundColor: "primary.50",
            },
            cursor: "pointer",
            fontWeight: "bold",
            paddingX: "10px",
            borderRadius: "4px",
          }}
          clickable
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Create
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: "30px",
              height: "30px",
              fontSize: "1rem",
              border: "none",
            },
          }}
        >
          <Tooltip title="diplamtuan">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/287701731_3187590661477962_8455951666370040477_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=SUEMVNYgdzsAX8rBGZ7&_nc_ht=scontent.fsgn5-5.fna&cb_e2o_trans=t&oh=00_AfApeS25DC-_qM6gUHj8ONMn6RX_EUShJoccVKuiBOxRBw&oe=65BFEE89"
            />
          </Tooltip>
          <Tooltip title="diplamtuan">
            <Avatar
              alt="Travis Howard"
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/285539337_2222695887906968_4873520042340893022_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KstzBz9kouUAX9OrUNX&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfDVaFZX7e-x5O2j4Oc9Hl87MkiIl4RC3tS1x64NAG4woQ&oe=65BF30C6"
            />
          </Tooltip>
          <Tooltip title="diplamtuan">
            <Avatar
              alt="Cindy Baker"
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/364774780_1733033167142017_4197371212770652663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=WY9oxP2Mf9sAX8oMBXd&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfAoYrgsSHEHShgWXVHR_LTitS9u4jm3is5JqFGxpF2lMQ&oe=65BFABAA"
            />
          </Tooltip>
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/149467469_1118138078631532_1995835737734726561_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=je--S_Qpk0YAX9xlo9T&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfAFHkZsa5gdQqJcPeiVym3Hjky5MQOKafhh0ogVg2d33g&oe=65E1ACCE"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/179204068_1167570147021658_9098356964548134432_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=vDm4mJIVu84AX-vqv_Z&_nc_oc=AQnxqMVeek8dRWl0uwB6sWN1Gu8WqIk9Nvg6ZP8fabMJT8dG05nU6kvHrTyJ8ti9hFA&_nc_ht=scontent.fsgn5-5.fna&cb_e2o_trans=t&oh=00_AfDaNSKo00r2wERVgglNrVQA7Ac8NnFRXZeXC4C47rsffw&oe=65E1C4AB"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/287701731_3187590661477962_8455951666370040477_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=SUEMVNYgdzsAX8rBGZ7&_nc_ht=scontent.fsgn5-5.fna&cb_e2o_trans=t&oh=00_AfApeS25DC-_qM6gUHj8ONMn6RX_EUShJoccVKuiBOxRBw&oe=65BFEE89"
          />
          <Avatar
            alt="Travis Howard"
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/285539337_2222695887906968_4873520042340893022_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KstzBz9kouUAX9OrUNX&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfDVaFZX7e-x5O2j4Oc9Hl87MkiIl4RC3tS1x64NAG4woQ&oe=65BF30C6"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/364774780_1733033167142017_4197371212770652663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=WY9oxP2Mf9sAX8oMBXd&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfAoYrgsSHEHShgWXVHR_LTitS9u4jm3is5JqFGxpF2lMQ&oe=65BFABAA"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/149467469_1118138078631532_1995835737734726561_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=je--S_Qpk0YAX9xlo9T&_nc_ht=scontent.fsgn5-2.fna&cb_e2o_trans=t&oh=00_AfAFHkZsa5gdQqJcPeiVym3Hjky5MQOKafhh0ogVg2d33g&oe=65E1ACCE"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/179204068_1167570147021658_9098356964548134432_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=vDm4mJIVu84AX-vqv_Z&_nc_oc=AQnxqMVeek8dRWl0uwB6sWN1Gu8WqIk9Nvg6ZP8fabMJT8dG05nU6kvHrTyJ8ti9hFA&_nc_ht=scontent.fsgn5-5.fna&cb_e2o_trans=t&oh=00_AfDaNSKo00r2wERVgglNrVQA7Ac8NnFRXZeXC4C47rsffw&oe=65E1C4AB"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default index;
