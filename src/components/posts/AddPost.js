import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const AddPost = () => {
  return (
    <>
      <Typography
        variant="h6"
        style={{
          textAlign: "left",
          backgroundColor: "var(--black-color)",
          color: "#fff",
          padding: "5px",
        }}
      >
        Add Post
      </Typography>
      <form style={{ padding: "10px" }}>
        <Grid>
          <TextField
            id="standard-helperText"
            label="Add Text"
            variant="filled"
            style={{ marginRight: "10px" }}
          />
          <TextField type="file" style={{ marginRight: "10px" }} />
          <Button
            style={{
              outline: "1px solid var(--black-color)",
              color: "var(--black-color)",
            }}
          >
            save
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default AddPost;
