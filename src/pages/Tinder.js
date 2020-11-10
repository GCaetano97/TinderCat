import { Button, ButtonGroup, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import tinderService from "../services/tinder";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";

const useStyles = makeStyles(() => ({
  imageStyles: {
    height: 400,
    width: 550,
    margin: "auto",
  },
  catButtonStyles: {
    paddingTop: 500,
  },
}));

function Tinder() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [started, setStarted] = useState(false);

  const getRandomCat = async () => {
    const response = await tinderService.randomCat();
    setImage(response.data[0].url);
    setStarted(true);
  };

  const likeCat = () => {
    var likes = localStorage.getItem("likes")
      ? JSON.parse(localStorage.getItem("likes"))
      : [];
    likes.push(image);
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  const dislikeCat = () => {
    var dislikes = localStorage.getItem("dislikes")
      ? JSON.parse(localStorage.getItem("dislikes"))
      : [];
    dislikes.push(image);
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ marginBottom: "20px", color: "#9c714b" }}
      >
        Let's Tinder
      </Typography>
      <Paper
        align="center"
        elevation={10}
        style={{
          margin: "auto",
          width: 550,
          height: 450,
          backgroundColor: "#FFFFFF",
        }}
      >
        {started ? (
          <img src={image} alt="Cat" className={classes.imageStyles} />
        ) : (
          <Typography
            variant="h6"
            style={{ marginBottom: "372px", color: "#495867" }}
          >
            Click below to start!
          </Typography>
        )}

        <div>
          <ButtonGroup>
            <Button onClick={() => likeCat()} disabled={!started}>
              <FavoriteSharpIcon style={{ color: "#00FF00" }} />
            </Button>
            <Button onClick={() => getRandomCat()} style={{ color: "#495867" }}>
              Get a Cat
            </Button>
            <Button onClick={() => dislikeCat()} disabled={!started}>
              <CancelSharpIcon style={{ color: "#FF0000" }} />
            </Button>
          </ButtonGroup>
        </div>
      </Paper>
      <div>
        <Typography
          align="center"
          style={{ marginTop: "20px", color: "#9c714b" }}
          variant="h5"
        >
          Instructions
        </Typography>
        <ul style={{ width: "17%", margin: "auto", color: "#495867" }}>
          <li>Click on Get a Cat to get a cat!</li>
          <li>Like, dislike or change to the next Cat!</li>
          <li>Review your choices on the Likes tab!</li>
        </ul>
      </div>
    </div>
  );
}

export default Tinder;
