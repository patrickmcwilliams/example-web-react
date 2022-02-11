import React, { Fragment } from 'react';
import { Button, ButtonBase } from '@material-ui/core';
import styles from './SubmitButton.module.css'


const SubmitButton = () => {
  return (
    <Fragment>
      <Button variant='contained'>
        Submit
      </Button>
    </Fragment>
  )
};

export default SubmitButton;
