import React from "react";
import Grid from "@material-ui/core/Grid";
import ImA from "./image.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: "auto",
  },
}));
function About() {
  const classes = useStyles();
  return (
    <section id="about">
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12} sm={4}>
          <Avatar alt="Profile Picture" src={ImA} className={classes.large} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className="aboutTxt">
            <div>
              <h6>About Me</h6>
              <p>
                I am a cyber security expert, part time marketer, and soon to be
                web developer. I currently live in Arlington, Virginia and I am
                working for Freedom Cluster SE Institute as Information Security
                Analyst. My favorite hobby includes building things on the
                internet like ecommerce sites, email marketing campaigns, etc.
                and learning about new technology. I thrive in an environment
                that constantly challenges me, and I am passionate about problem
                solving. My dream is to become someone who is even greater than
                Elon Musk. I have been moving on idolizing Elon Musk, and my
                goal in life is to provide this world with one of the greatest
                inventions.
              </p>
            </div>
            <div>
              <List>
                <h2>Contact Details</h2>
                <ListItem>
                  <u>LinkedIn</u>
                  {": "}spenevank
                </ListItem>
              </List>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
