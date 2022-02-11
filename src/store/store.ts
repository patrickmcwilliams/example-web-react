import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import errorReducer from './reducers/ErrorSlice';
import approvalFormReducer from './reducers/ApprovalFormSlice';
import loadingReducer from './reducers/LoadingSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    errors: errorReducer,
    approvalForm: approvalFormReducer,
    loading: loadingReducer,
  },
  middleware: [logger]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
