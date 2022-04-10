import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

const Search = () => {
  return (
    <Box>
      <form style={{ width: "100%" }}>
        <TextField
          id="outlined-basic"
          label="search friends"
          variant="outlined"
          style={{ width: "100%" }}
        />
      </form>
      <div
        style={{
          display: "flex",
          padding: "10px",
          margin: "10px 0",
          outline: "1px solid gray",
        }}
      >
        <img
          style={{ width: "30px", borderRadius: "50%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />

        <Typography style={{ marginTop: "5px", marginLeft: "8px" }}>
          Laca
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          margin: "10px 0",
          outline: "1px solid gray",
        }}
      >
        <img
          style={{ width: "30px", borderRadius: "50%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />

        <Typography style={{ marginTop: "5px", marginLeft: "8px" }}>
          Laca
        </Typography>
      </div>
    </Box>
  );
};

export default Search;
