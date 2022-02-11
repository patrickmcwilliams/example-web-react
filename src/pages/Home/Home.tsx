import React from 'react';
import styles from './Home.module.css';
import { Box, Grid, GridSize, Typography } from '@material-ui/core';
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
      <Grid item className={styles.Content} xs={10} lg={8}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet eget. Vel facilisis volutpat est velit egestas dui id ornare. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Vel turpis nunc eget lorem. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Non enim praesent elementum facilisis leo vel fringilla est. Proin libero nunc consequat interdum varius sit amet. Nulla posuere sollicitudin aliquam ultrices. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Arcu non sodales neque sodales.
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Home;
