import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const loaderStyles = makeStyles(theme => ({
  progressContainer: {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center"
  },
  progress: {
    marginTop: "20%"
  }
}));

const Loader = () => {
  const classes = loaderStyles();

  return (
    <Grid className={classes.progressContainer}>
      <CircularProgress size={80} className={classes.progress} />
    </Grid>
  );
};

export default Loader;
