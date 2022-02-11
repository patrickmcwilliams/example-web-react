import { createSlice } from '@reduxjs/toolkit'

export const approvalSlice = createSlice({
  name: 'approvalForm',
  initialState: {
    formValues: {
        amount: 0,
        type:'',
        worth: 0,
        income: 0,
        credit: 0,
    }
  },
  reducers: {
    setApprovalValues: (state, action:any) => {
        state.formValues = {...state.formValues, ...action.payload};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setApprovalValues } = approvalSlice.actions

export default approvalSlice.reducer