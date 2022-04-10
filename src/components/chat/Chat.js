import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const Chat = () => {
  return (
    <Grid className="grid-chat">
      {/* chat-messages*/}
      <Card className="grid-chat-msg">
        <CardContent
          style={{ background: "var(--black-color)", color: "#fff" }}
        >
          <Typography variant="h6">john weck</Typography>
        </CardContent>
        <CardContent
          className="messages"
          style={{ backgroundColor: "rgb(238, 236, 222)" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <img
              style={{
                width: "30px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
            />
            <Typography
              variant="p"
              style={{
                backgroundColor: "#fff",
                padding: "6px",
                borderRadius: "10px",
              }}
            >
              Hello my friend
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <Typography
              variant="p"
              style={{
                backgroundColor: "#333",
                padding: "6px",
                borderRadius: "10px",
                color: "#fff",
              }}
            >
              Hello my friend
            </Typography>
            <img
              style={{
                width: "30px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
            />
          </div>
        </CardContent>
        <CardActions style={{ width: "100%" }}>
          <form style={{ width: "100%" }}>
            <TextField label="send message" variant="filled" />

            <SendIcon
              style={{
                color: "var(--black-color)",
                marginTop: "10px",
                marginLeft: "5px",
              }}
            />
          </form>
        </CardActions>
      </Card>
      {/* chat-friends*/}
      <div className="grid-chat-friends">
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
        />
      </div>
    </Grid>
  );
};

export default Chat;
