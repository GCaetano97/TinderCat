import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

function Likes() {
  const likedCats = JSON.parse(localStorage.getItem("likes"));
  const dislikedCats = JSON.parse(localStorage.getItem("dislikes"));
  return (
    <div style={{ marginTop: "12vh" }}>
      <br />
      <Typography variant="h3" align="center" style={{ color: "#9c714b" }}>
        Welcome to your Collection!
      </Typography>
      <br />
      <br />
      <div>
        <Grid container spacing={0}>
          <Grid container item xs={6} spacing={0} direction="column">
            <Typography
              variant="h5"
              align="center"
              style={{ color: "#495867" }}
            >
              Likes
            </Typography>
            <br />
            <Paper
              align="center"
              elevation={10}
              style={{
                margin: "auto",
                width: 550,
                height: 450,
                backgroundColor: "#FFFFFF",
                overflow: "auto",
              }}
            >
              <Grid container spacing={0}>
                {!localStorage.getItem("likes") && (
                  <Grid
                    container
                    item
                    xs={12}
                    spacing={0}
                    justify="center"
                    style={{ color: "#495867" }}
                  >
                    <Typography
                      align="right"
                      style={{ marginTop: 15, color: "#495867" }}
                    >
                      No cat is purrfect to you
                    </Typography>
                  </Grid>
                )}
                {localStorage.getItem("likes") && (
                  <Grid container item xs={12} spacing={0}>
                    {likedCats.map((cat) => (
                      <Grid item xs={6} key={cat}>
                        <img
                          src={cat}
                          alt="cat"
                          style={{
                            height: 200,
                            width: 250,
                            marginBottom: 15,
                            marginTop: 15,
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
          <Grid container item xs={6} spacing={0} direction="column">
            <Typography
              variant="h5"
              align="center"
              style={{ color: "#495867" }}
            >
              Dislikes
            </Typography>
            <br />
            <Paper
              align="center"
              elevation={10}
              style={{
                margin: "auto",
                width: 550,
                height: 450,
                backgroundColor: "#FFFFFF",
                overflow: "auto",
              }}
            >
              <Grid container spacing={0}>
                {!localStorage.getItem("dislikes") && (
                  <Grid
                    container
                    item
                    xs={12}
                    spacing={0}
                    justify="center"
                    style={{ color: "#495867" }}
                  >
                    <Typography
                      align="right"
                      style={{ marginTop: 15, color: "#495867" }}
                    >
                      No cat is disliked
                    </Typography>
                  </Grid>
                )}
                {localStorage.getItem("dislikes") && (
                  <Grid container item xs={12} spacing={0}>
                    {dislikedCats.map((cat) => (
                      <Grid item xs={6} key={cat}>
                        <img
                          src={cat}
                          alt="cat"
                          style={{
                            height: 200,
                            width: 250,
                            marginBottom: 15,
                            marginTop: 15,
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Likes;
