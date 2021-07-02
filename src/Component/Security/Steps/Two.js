import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

const Two = ({
  handleNext,
  prevButton,
  handleChange,
  formvalues: { maidenName },
}) => {
  let isValid = false;
  if (maidenName) {
    isValid = maidenName.length > 0;
  }

  return (
    <div>
      <label>What is your mother's maiden name?</label>
      <br />
      <br />
      <TextField
        autoComplete="off"
        fullWidth
        name="maidenName"
        value={maidenName || ""}
        onChange={handleChange}
        placeholder="Mothers Maiden Name"
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
export default Two;