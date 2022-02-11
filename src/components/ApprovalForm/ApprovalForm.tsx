import React from 'react';
import { FormHelperText, Grid, Input, Typography } from '@material-ui/core';
import styles from './ApprovalForm.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setApprovalError } from '../../store/reducers/ErrorSlice';
import { setApprovalValues } from '../../store/reducers/ApprovalFormSlice';


const ApprovalForm = () => {
  const leftColumWidth = 6;
  const rightColumnWidth = 6;

  const errors = useAppSelector((state: { errors: any; }) => state.errors.approvalForm);
  const dispatch = useAppDispatch();

  const  currencyValidatorFormatter = (target:any, key)=>{
    let amount:string = target.value;
    if (amount.match(/[^$0-9.,]/)!=null){
      dispatch(setApprovalError({[key]:true}));
      target.value = amount.replace(/[^$0-9.,]/,'')
    }    
    if (amount.match(/^\$?(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/)==null){
      dispatch(setApprovalError({[key]:true}));
    }
    else {
      dispatch(setApprovalError({[key]:false}));
    }
    amount = target.value;
    if (amount === ''){
      amount = '0';
    }
    dispatch(setApprovalValues({[key]:amount}));
  }

  return (
    <Grid container className={styles.ApprovalForm} direction="row" spacing={2}>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Investment Amount:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input
          autoFocus={true}
          placeholder='100,000.00'
          required={true}
          onChange={e=>currencyValidatorFormatter(e.target, 'amount')}
          error={errors.amount}
        />
        <FormHelperText hidden={!errors.amount} 
          error={true}
        >
          Valid currency format only
        </FormHelperText>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Investment Type:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input
        />
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
