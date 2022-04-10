import * as React from "react";
import { Box, Button, Card, Grid, Link, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  return (
    <Grid>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          width: "400px",
          margin: "12rem auto",

          "& > :not(style)": { m: 1 },
        }}
      >
        <form
          sx={{
            display: "flex",
            flexDirection: "column",

            "& > :not(style)": { m: 1 },
          }}
        >
          <LockIcon
            sx={{
              color: "var(--black-color)",
              width: "100%",
              marginBottom: "10px",
            }}
          />
          <Button
            sx={{
              background: "none",
              outline: "1px solid var(--black-color)",
              color: "var(--black-color)",
              width: "100%",
            }}
          >
            <GoogleIcon /> oogle
          </Button>
          <hr style={{ margin: "10px 0" }} />
          <TextField
            helperText="Please enter your email"
            id="demo-helper-text-misaligned"
            label="Email"
            type="email"
            sx={{
              width: "100%",
            }}
          />
          <TextField
            helperText="Please enter password"
            id="demo-helper-text-misaligned"
            label="Password"
            type="password"
            sx={{
              width: "100%",
            }}
          />
          <Button
            style={{
              backgroundColor: "var(--black-color)",
              color: "#fff",
              width: "100%",
            }}
          >
            Sign In
          </Button>
        </form>
        <Typography>
          don`t have any account..? <Link href="/register">Sign Up</Link>
        </Typography>
      </Card>
    </Grid>
  );
};

export default Login;
