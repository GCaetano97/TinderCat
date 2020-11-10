import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import PetsOutlinedIcon from "@material-ui/icons/PetsOutlined";

const useStyles = makeStyles(() => ({
  buttonStyles: {
    paddingLeft: "25px",
    paddingRight: "15px",
    color: "#495867",
  },
  AppBarStyle: {
    backgroundColor: "#FFF",

    top: 0,
    left: 0,
    position: "fixed",
    color: "#000",
    borderBottom: "2px solid #C18C5D",
    boxShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
  },
  TypographyStyle: {
    color: "#495867",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      variant="elevation"
      className={classes.AppBarStyle}
    >
      <Toolbar>
        <Button component={Link} to="/" className={classes.TypographyStyle}>
          <PetsOutlinedIcon />
          <Typography variant="h5">tinder cat</Typography>
        </Button>
        <div style={{ marginLeft: "auto" }}>
          <Button className={classes.buttonStyles} component={Link} to="/about">
            About
          </Button>
          <Button className={classes.buttonStyles} component={Link} to="/likes">
            Likes
          </Button>
          <Button
            endIcon={<KeyboardArrowRightIcon />}
            size="large"
            className={classes.buttonStyles}
            component={Link}
            style={{
              backgroundColor: "#C18C5D",
              borderRadius: "10px",
              marginLeft: "10px",
              color: "#FFF",
            }}
            to="/tinder"
          >
            Get Started
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
