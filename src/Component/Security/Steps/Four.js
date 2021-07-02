import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

const Four = ({
  handleNext,
  prevButton,
  handleChange,
  formvalues: { petName },
}) => {
  let isValid = false;
  if (petName) {
    isValid = petName.length > 0;
  }

  return (
    <div>
      <label>What is the name of your first pet?</label>
      <br />
      <br />
      <TextField
        autoComplete="off"
        fullWidth
        name="petName"
        value={petName || ""}
        onChange={handleChange}
        placeholder="Name of The Pet"
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
          <Button color="primary" variant="contained" onClick={prevButton}>
            Previous
          </Button>
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

export default Four;
