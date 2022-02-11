import React from 'react';
import { Grid, Input, Typography } from '@material-ui/core';
import styles from './ApprovalForm.module.css';


const ApprovalForm = () => {
  const leftColumWidth = 6;
  const rightColumnWidth = 6;

  return (
    <Grid container className={styles.ApprovalForm} direction="row" spacing={2}>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Investment Amount:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input></Input>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Investment Type:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input></Input>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Total Net Worth:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input></Input>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Estimated Yearly Income:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input></Input>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Estimated Credit Score:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input></Input>
      </Grid>
    </Grid>
  )
};

export default ApprovalForm;
