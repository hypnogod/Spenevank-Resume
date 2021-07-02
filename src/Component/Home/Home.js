import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import background from "./bg.jpg";

function Home() {
  return (
    <section id="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="intro-Container">
        <h1>Hi, I am Spenevank Shyanak</h1>
        <p>Say hi to me on these social networks:</p>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <IconButton
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/spenevank"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/spenevank.shyanak/"
              >
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton
                color="primary"
                onClick={() => {
                  alert("Not Implemented");
                }}
              >
                <EmailIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Home;
