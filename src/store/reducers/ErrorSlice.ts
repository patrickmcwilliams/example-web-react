import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    approvalForm: {
        amount: false,
        type: false
    }
  },
  reducers: {
    setApprovalError: (state, action:any) => {
        state.approvalForm = {...state.approvalForm, ...action.payload};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setApprovalError } = errorSlice.actions

export default errorSlice.reducer