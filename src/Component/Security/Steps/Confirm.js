import React from "react";
import {
  Grid,
  Button,
  ListItemText,
  ListItem,
  List,
  Divider,
} from "@material-ui/core";

function Confirm({ prevButton, formvalues, handleSubmit }) {
  const { name, maidenName, birthPlace, petName, favBook } = formvalues;

  return (
    <div className="confirm">
      <h1>Confirm</h1>
      <List disablePadding>
        <ListItem>
          <Grid container>
            <Grid item xs={12}>
              <ListItemText primary="Name" secondary={name} />
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ListItemText primary="Maiden Name" secondary={maidenName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItemText primary="Birth Place" secondary={birthPlace} />
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid item xs={12}>
            <ListItemText primary="Pet Name" secondary={petName} />
          </Grid>
          <Grid item xs={12}>
            <ListItemText primary="Book Name" secondary={favBook} />
          </Grid>
        </ListItem>
        <Divider />
      </List>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ paddingTop: "20px" }}
      >
        <Grid item>
          <Button variant="contained" onClick={prevButton}>
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Confirm;
