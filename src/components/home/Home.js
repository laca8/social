import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AddPost from "../posts/AddPost";
import Posts from "../posts/Posts";
import Menu from "./Menu";
import Dates from "./Date";
import Search from "./Search";
import Chat from "../chat/Chat";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [hand, setHand] = React.useState(true);

  React.useEffect(() => {
    if (window.innerWidth < 1455) {
      setHand(false);
      console.log(hand);
      console.log(window.innerWidth);
    }
  }, [window.innerWidth, hand]);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ margin: "10px 0" }} className="home_box">
      <Grid container spacing={3} className="home">
        <Grid item xs={hand ? 3 : 12} className="box1">
          <Menu />
          <Item>
            <Dates />
          </Item>
        </Grid>
        <Grid item xs={hand ? 6 : 12} className="box1">
          <Item style={{ marginBottom: "10px" }}>
            <AddPost />
          </Item>

          <Posts />
        </Grid>
        <Grid item xs={hand ? 3 : 12} className="box1">
          <Item style={{ marginBottom: "10px" }}>
            <Search />
          </Item>
          <Chat />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
