import React, { Fragment } from 'react';
import { Button, FormHelperText, Grid } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import approvalService from '../../service/ApprovalService/ApprovalService';
import { setLoading } from '../../store/reducers/LoadingSlice';
import { useHistory } from "react-router-dom";


const SubmitButton = () => {
  const history = useHistory();
  const { errors, values, loading } = useAppSelector((state) => {
    return {
      errors: state.errors.approvalForm,
      values: state.approvalForm.formValues,
      loading: state.loading.isLoading
    }
  });
  const dispatch = useAppDispatch();

  const formError = Object.values(errors).some((val) => val);
  const formFilled = Object.values(values).every((val) => val !== '' && val !== 0);
  const submitHandler = async () => {
    dispatch(setLoading(true));
    const result = await approvalService(values);
    dispatch(setLoading(false));
    if (result.status === 'success'){
      history.push('\success');
    }
    else if (result.status === 'fail'){
      history.push('\disqualify');
    }
    else{

    }
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

      <Button variant='contained' onClick={submitHandler} disabled={formError || !formFilled || loading}>
        Submit
      </Button>

    </Fragment>
  )
};

export default SubmitButton;
