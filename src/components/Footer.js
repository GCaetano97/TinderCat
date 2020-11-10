import { Typography } from "@material-ui/core";
import React from "react";

const footerStyle = {
  background: "#222222",
  color: "#777777",
  padding: "15px",
  textAlign: "center",
  postion: "fixed",
  bottom: 0,
  left: 0,
};

function Footer() {
  return (
    <div style={footerStyle}>
      <Typography>
        Tinder cat &copy;2020
        <br />
        (not really copyrighted)
      </Typography>
    </div>
  );
}

export default Footer;
