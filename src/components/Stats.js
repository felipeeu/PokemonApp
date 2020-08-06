import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const statsStyles = makeStyles(theme => ({
  title:{
    fontSize:"25px",
  },
  statsContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#f5005712",
    justifyContent: "center",
    flexDirection: "column",
    padding:"10px 10px 30px 30px"
  },
  statsIndicator: {
    width: "80%",
    paddingTop: "40px"
  }
}));

const Stats = ({ pokemon }) => {
  const classes = statsStyles();
  
  return (
    <>
      <Grid className={classes.statsContainer}>
        <Typography className={classes.title} >Stats</Typography>
        {pokemon.stats &&
          pokemon.stats.map((stat,idx) => {
            return (
              <Grid key = {idx} className={classes.statsIndicator}>
                <Typography>{stat.stat.name} </Typography>
                <LinearProgress variant="determinate" value={stat.base_stat} /> 
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Stats;
