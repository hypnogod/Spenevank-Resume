import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

function Resume() {
  return (
    <section id="resume">
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        className="m6"
      >
        <Grid item xs={12} sm={3}>
          <h5>Education</h5>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div>
            <h6>High School</h6>
            <p>2010 - 2014</p>
            <p>
              I went to Benjamin Banneker High School. During the high school
              years, I found my passion for computers and technology. Driven by
              my interest, I started to build Software, participating in CTF and
              hackathons. I was also awarded the Business and IT student of the
              year consequently for four years. High school was I important part
              of my life as I learned Python, MySql, Java, AWS, Linux, Docker,
              etc. and I was able to find my dream job.
            </p>
          </div>
          <Divider />
          <div>
            <h6>College</h6>
            <p>2014 - 2020</p>
            <p>
              I went to college at George Mason University (GMU). During
              college, I majored in Information Technology: Cyber Security,
              Computer Science, and Psychology: Cognitive {"&"} Behavioral
              Neuroscience.
            </p>
          </div>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        className="m6"
      >
        <Grid item xs={12} sm={3}>
          <h5>Work</h5>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div>
            <h6>Freedom Cluster SE Institute</h6>
            <p>Mar 2020 - Present</p>
            <p>
              I joined Freedom Cluster SE Institute during my senior year of
              High School and continued throughout college as an Information
              Security Analyst. I officially joined the institute in 2020 March
              (previously I was just an intern). Freedom Cluster SE Institute is
              a trillion-dollar that works with the government and companies
              around the world to secure them. Currently, the institute only has
              ten official members and two interns.
            </p>
          </div>
        </Grid>
      </Grid>
      <Divider />
    </section>
  );
}

export default Resume;
