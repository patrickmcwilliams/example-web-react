import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import styles from './Approved.module.css';

const Approved = () => (
  <Grid container className={styles.SuccessContainer}
    direction="column" justifyContent="center"
    alignItems="center" spacing={2}
  >
    <Grid item>
      <Typography variant='h3'>
         Congratulations you qualified
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant='body1'>
         We will be in contact with you for further steps
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant='body1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </Grid>
  </Grid>
);

export default Approved;
