import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <section id="footer">
      <Grid container spacing={3} justify="center">
        <Grid item>
          <IconButton
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/spenevank"
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/spenevank.shyanak/"
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary">
            <EmailIcon
              onClick={() => {
                alert("Not Implemented");
              }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </section>
  );
}

export default Footer;
