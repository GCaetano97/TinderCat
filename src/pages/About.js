import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { PetsOutlined } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(() => ({
  paperStyles: {
    position: "static",
    marginTop: "12vh",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.paperStyles}>
      <br />
      <Typography variant="h3" align="center" style={{ color: "#9c714b" }}>
        Welcome to <PetsOutlined style={{ fontSize: 40 }} />
        Tinder Cat
      </Typography>
      <div style={{ color: "#495867", margin: 25 }}>
        <Typography>
          Hello! My name is Gonçalo Caetano and I'm a 23 years old fullstack
          developer. Welcome to Tinder Cat, one of my projects! If you are like
          me you love cats and would love to see some every now and then so, for
          that reason, I built this mini project.
          <br />
          This is a simple SPA made in React for the course I'm taking. <br />
          If you would like to see some more projects I made you can check my{" "}
          <a
            href="https://github.com/GCaetano97"
            style={{ textDecoration: "none" }}
          >
            Github <GitHubIcon />
          </a>{" "}
          <br />
          Thank you for your time and have a nice day!
        </Typography>
      </div>
    </div>
  );
}

export default About;
