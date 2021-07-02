import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    zIndex: 100,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Grid container spacing={5} justify="center" className="kk">
            <Grid item>
              <Button href="#home" color="inherit">
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button href="#about" color="inherit">
                About
              </Button>
            </Grid>
            <Grid item>
              <Button href="#resume" color="inherit">
                Resume
              </Button>
            </Grid>
            {!props.login ? (
              <Grid item>
                <Button href="#login" color="inherit">
                  Login
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button href="#flag" color="inherit">
                  Flag
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
