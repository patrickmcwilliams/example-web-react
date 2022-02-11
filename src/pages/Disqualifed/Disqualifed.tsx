import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './Disqualifed.module.css';

const Disqualifed = () => {
  const message = useAppSelector((state) => state.errors.disqualifiedMessage);
  return (
    <Grid container className={styles.FailContainer}
      direction="column" justifyContent="center"
      alignItems="center" spacing={2}
    >
      <Grid item>
        <Typography variant='h3'>
          Sorry but you are not approved
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          Please call us at 555-555-5555 for any questions about this decision
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          {message}
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Disqualifed;
