import React, { Fragment } from 'react';
import { Button, FormHelperText, Grid } from '@material-ui/core';
import { useAppSelector } from '../../store/hooks';


const SubmitButton = () => {
  const { errors, values } = useAppSelector((state) => {
    return {
      errors: state.errors.approvalForm,
      values: state.approvalForm.formValues
    }
  });
  const formError = Object.values(errors).some((val) => val);
  const formFilled = Object.values(values).every((val) => val !== '' && val !== 0);
  const submitHandler = () => {
    
  };

  return (
    <Fragment>
      <Grid container direction='column'>
        <FormHelperText hidden={!formError}
          error={true}
        >
          Please fix issues in form
        </FormHelperText>
        <FormHelperText hidden={formFilled}
          error={false}
        >
          Please fill out entire form
        </FormHelperText>
      </Grid>

      <Button variant='contained' onClick={submitHandler} disabled={formError || !formFilled}>
        Submit
      </Button>

    </Fragment>
  )
};

export default SubmitButton;
