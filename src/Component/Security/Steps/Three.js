import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

const Three = ({
  handleNext,
  prevButton,
  handleChange,
  formvalues: { birthPlace },
}) => {
  let isValid = false;
  if (birthPlace) {
    isValid = birthPlace.length > 0;
  }

  return (
    <div>
      <label>Where were you born?</label>
      <br />
      <br />
      <TextField
        autoComplete="off"
        fullWidth
        name="birthPlace"
        value={birthPlace || ""}
        onChange={handleChange}
        placeholder="Ex: Paris, London"
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

export default Three;
