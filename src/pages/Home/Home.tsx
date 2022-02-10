import React from 'react';
import styles from './Home.module.css';
import { Grid, Input, Typography } from '@material-ui/core';

const Home = (props: any) => (
  <Grid container className={styles.FormContainer} direction="row" justifyContent="center" alignItems="center" >
    <Grid item xs={6}>
      <Grid container className={styles.Form} direction="row" spacing={2}>
        <Grid item xs={6}>
          <Typography align="right">
            Investment Amount:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Input></Input>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            Investment Type:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Input></Input>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            Total Net Worth:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Input></Input>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            Estimated Yearly Income:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Input></Input>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            Estimated Credit Score:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Input></Input>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Home;
