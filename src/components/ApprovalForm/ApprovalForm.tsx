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

  const currencyValidatorFormatter = (target: any, key: string) => {
    let amount: string = target.value;
    if (amount.match(/[^$0-9.,]/) != null) {
      dispatch(setApprovalError({ [key]: true }));
      target.value = amount.replace(/[^$0-9.,]/g, '')
      dispatch(setApprovalValues({ [key]: 0 }));
    }
    if (amount.match(/^\$?(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/) == null) {
      dispatch(setApprovalError({ [key]: true }));
      dispatch(setApprovalValues({ [key]: 0 }));
    }
    else {
      dispatch(setApprovalError({ [key]: false }));
      amount = target.value;
      if (amount === '') {
        amount = '0';
      }
      dispatch(setApprovalValues({ [key]: amount.replace(/[^0-9.]/g, '') }));
    }
  }

  const creditValidatorFormatter = (target: any) => {
    let score: number = Number(target.value);
    if (score < 300 || score > 850) {
      dispatch(setApprovalError({ credit: true }));
      dispatch(setApprovalValues({ credit: 0 }));
    }
    else {
      dispatch(setApprovalError({ credit: false }));
      dispatch(setApprovalValues({ credit: score }));
    }
  };

  //TODO: create new custom field component for each field
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
          onChange={e => currencyValidatorFormatter(e.target, 'amount')}
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
          placeholder='eg. “Bond”, “Stocks”'
          required={true}
          onChange={e => dispatch(setApprovalValues({ type: e.target.value }))}
          error={errors.type}
        />
        <FormHelperText hidden={!errors.type}
          error={true}
        >
          Cannot be empty
        </FormHelperText>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Total Net Worth:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input
          placeholder='100,000.00'
          required={true}
          onChange={e => currencyValidatorFormatter(e.target, "worth")}
          error={errors.worth}
        />
        <FormHelperText hidden={!errors.worth}
          error={true}
        >
          Valid currency format only
        </FormHelperText>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Estimated Yearly Income:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input
          placeholder='100,000.00'
          required={true}
          onChange={e => currencyValidatorFormatter(e.target, "income")}
          error={errors.income}
        />
        <FormHelperText hidden={!errors.income}
          error={true}
        >
          Valid currency format only
        </FormHelperText>
      </Grid>
      <Grid item xs={leftColumWidth}>
        <Typography align="right">
          Estimated Credit Score:
        </Typography>
      </Grid>
      <Grid item xs={rightColumnWidth}>
        <Input
          placeholder='850'
          required={true}
          onChange={e => creditValidatorFormatter(e.target)}
          error={errors.credit}
        />
        <FormHelperText hidden={!errors.credit}
          error={true}
        >
          300-850
        </FormHelperText>
      </Grid>
    </Grid>
  )
};


export default ApprovalForm;
