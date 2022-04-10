import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const Menu = () => {
  return (
    <Paper sx={{ width: "100%", padding: "10px", marginBottom: "10px" }}>
      <Typography
        variant="h6"
        style={{ color: "var(--black-color)", fontWeight: "bold" }}
      >
        Menu
      </Typography>
      <hr />
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Home</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Messages
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Events</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Friends
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default Menu;
