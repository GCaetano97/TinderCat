import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import image from "../assets/HeroImg.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  heroTextStyles: {
    color: "#495867",
  },
  buttonDecideStyles: {
    backgroundColor: "#ECC8AF",
    borderRadius: "20px",
    padding: 20,
    boxShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
    marginTop: "80px",
  },
}));

const imageStyle = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "auto",
  minHeight: "100vh",
  minWidth: "100vh",
};

const titleStyle = {
  position: "relative",
  marginTop: "9%",
  marginLeft: "10%",
};

function Home() {
  const classes = useStyles();
  return (
    <div>
      <div style={imageStyle}>
        <p>a</p>
        <div style={titleStyle}>
          <Typography variant="h1" className={classes.heroTextStyles}>
            Love it
          </Typography>
          <Typography variant="h2" className={classes.heroTextStyles}>
            or
          </Typography>
          <Typography variant="h1" className={classes.heroTextStyles}>
            Hate it
          </Typography>
          <Button
            className={classes.buttonDecideStyles}
            component={Link}
            to="/tinder"
          >
            <Typography variant="h2" className={classes.heroTextStyles}>
              You Decide
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
