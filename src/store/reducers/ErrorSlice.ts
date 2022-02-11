import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    approvalForm: {
        amount: false,
        type: false,
        worth: false,
        income: false,
        credit: false
    },
    disqualifiedMessage: ''
  },
  reducers: {
    setApprovalError: (state, action:any) => {
        state.approvalForm = {...state.approvalForm, ...action.payload};
    },
    setDisqualifiedMessage: (state, action)=>{
        state.disqualifiedMessage = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setApprovalError, setDisqualifiedMessage } = errorSlice.actions

export default errorSlice.reducer