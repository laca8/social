import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Grid from "@mui/material/Grid";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import EditIcon from "@mui/icons-material/Edit";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

const PostInfo = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      sx={{
        maxWidth: "100%",
        textAlign: "left",
        justifyContent: "center",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      {/* profile && setting-post */}
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "50px", borderRadius: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
          />

          <Typography style={{ marginTop: "12px", marginLeft: "8px" }}>
            Laca
          </Typography>
        </div>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      {/* profile && setting-post */}

      <CardMedia
        component="img"
        height="194"
        image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/attachment_59337693.jpg?auto=format&q=60&fit=max&w=930"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      {/* like && comments*/}

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon />
          37
        </IconButton>
        <IconButton aria-label="share">
          <ChatOutlinedIcon />
          18
        </IconButton>
      </CardActions>
      {/* like && comments*/}
      <hr />
      {/* create comments */}
      <form style={{ marginLeft: "5px", padding: "10px", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div>
            <img
              style={{
                width: "40px",
                borderRadius: "50%",
                marginRight: "10px",
                marginTop: "16px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
            />
            <TextField
              id="input-with-sx"
              label="write comment"
              variant="standard"
              style={{ width: "540px", marginTop: "10px" }}
            />
          </div>
          <Button
            variant="contained"
            style={{
              marginLeft: "20px",
              backgroundColor: "var(--black-color)",
              width: "20px",
            }}
            endIcon={<SendIcon />}
          ></Button>
        </Box>
      </form>

      {/*create comments*/}
    </Card>
  );
};

export default PostInfo;
