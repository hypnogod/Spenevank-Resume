import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";

export default function Login(props) {
  return (
    <section id="login">
      <form autoComplete="off" className="LoginForm">
        <h2>Login</h2>
        <div className="a775">
          <TextField
            id="standard-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
            required
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth={true}
            required
          />
          <Link href="/security" className="linkL">Forgot Password Or Username</Link>
        </div>
        <Button type="submit" variant="outlined" onSubmit={props.onClickHandeler}>
          Submit
        </Button>
      </form>
    </section>
  );
}
