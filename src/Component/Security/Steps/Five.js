import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

const Four = ({
  handleNext,
  prevButton,
  handleChange,
  formvalues: { favBook },
}) => {
  let isValid = false;
  if (favBook) {
    isValid = favBook.length > 0;
  }

  return (
    <div>
      <label>What Is your favorite book?</label>
      <br />
      <br />
      <TextField
        autoComplete="off"
        fullWidth
        name="favBook"
        value={favBook || ""}
        onChange={handleChange}
        placeholder="Name of The Book"
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
