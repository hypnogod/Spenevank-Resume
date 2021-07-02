import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

const One = ({ handleNext, handleChange, formvalues: { name } }) => {
  let isValid = false;
  if (name) {
    isValid = name.length > 0;
  }

  return (
    <div>
      <label>Enter Your Full Name:</label>
      <br />
      <br />
      <TextField
        autoComplete="off"
        fullWidth
        name="name"
        value={name || ""}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ paddingTop: "20px" }}
      >
        <Grid item>

        </Grid>
        <Grid item>
          <Button
            color="primary"
            disabled={!isValid}
            variant="contained"
            onClick={isValid ? handleNext : null}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default One;