import React from "react";

import { Typography, Card, Link, Button } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
const Profile = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Card
        style={{
          display: "flex",
          padding: "10px",
          alignItems: "center",
          borderTop: "3px solid var(--black-color)",
          position: "relative",
        }}
        className="profile-avatar"
      >
        <div>
          <img
            style={{
              width: "150px",

              marginRight: "10px",
              marginTop: "16px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnUckFxDVe5FOT5vuVfWCvWWY1pUrOPBOFPu9CNZYpABJSYPCigxy9rEc32E6mBamw3c&usqp=CAU"
          />
        </div>
        <div style={{ color: "var(--black-color)" }}>
          <Typography variant="h5">Morgan Freeman</Typography>
          <Typography>actor</Typography>
          <Typography>America,los anglos</Typography>
          <Link href="#" underline="none" style={{ marginRight: "10px" }}>
            Following 23
          </Link>
          ,
          <Link href="#" underline="none">
            Followers 10
          </Link>
          <br />
          <Button
            style={{ backgroundColor: "var(--black-color)", color: "#fff" }}
          >
            Follow
          </Button>
        </div>
        <div>
          <Button
            style={{
              outline: "1px solid var(--black-color)",
              color: "var(--black-color)",
              position: "absolute",
              top: "20px",
              right: "10px",
            }}
          >
            Edit
          </Button>
        </div>
      </Card>
      <Card
        style={{
          padding: "10px",

          marginTop: "10px",
        }}
      >
        <Typography variant="h5" style={{ color: "gray" }}>
          General Info
        </Typography>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "grey",
          }}
          className="profile-info"
        >
          <div style={{ marginBottom: "10px" }}>
            <Typography style={{ marginBottom: "5px" }}>Age: 88</Typography>
            <Typography style={{ marginBottom: "5px" }}>
              Experience: 33 Years
            </Typography>
            <Typography style={{ marginBottom: "5px" }}>Job: Actor</Typography>
            <Typography style={{ marginBottom: "5px" }}>
              Nationality: American
            </Typography>
            <Typography style={{ marginBottom: "5px" }}>
              Education Level: High School
            </Typography>
            <Typography style={{ marginBottom: "5px" }}>
              Gender: Male
            </Typography>
          </div>
          <div style={{ alignItems: "center" }}>
            <Typography style={{ marginBottom: "5px" }}>
              <PhoneAndroidIcon /> 02372871
            </Typography>
            <Typography style={{ marginBottom: "5px" }}>
              <EmailIcon /> morgan88@gmail.com
            </Typography>
            <Typography style={{ marginBottom: "5px" }}>
              <WorkIcon /> Actor
            </Typography>
            <Typography style={{ marginBottom: "5px" }}>
              <TwitterIcon /> morganFreeman_88
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
