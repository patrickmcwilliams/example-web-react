import React from 'react';
import styles from './Home.module.css';
import { Box, Grid, GridSize } from '@material-ui/core';
import ApprovalForm from '../../components/ApprovalForm/ApprovalForm';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

const Home = () => {
  const sizes:{xs:GridSize,s:GridSize,md:GridSize,lg:GridSize} = {xs:8, s:6, md:6, lg:4};

  return (
    <Grid container className={styles.FormContainer} 
          direction="column" justifyContent="center" 
          alignItems="center" spacing={2}
    >
      <Grid item {...sizes}>
        <ApprovalForm />
      </Grid>
      <Grid {...sizes} className={styles.Box} item>
        <Box display="flex" alignItems='center' justifyContent="flex-end">
          <SubmitButton/>
        </Box>
      </Grid>
    </Grid>
  )
};

export default Home;
