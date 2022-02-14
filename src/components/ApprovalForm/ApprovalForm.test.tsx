import React from 'react';
import {render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApprovalForm from './ApprovalForm';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('<ApprovalForm />', () => {
  const initialState = {
    errors: {
      approvalForm: {
        amount: false,
        type: false,
        worth: false,
        income: false,
        credit: false
      }
    },
    loading: {
      isLoading: false
    }
  }
  const mockStore = configureStore()
  let store

  test('it should mount', () => {
    store = mockStore(initialState)
    const { getAllByPlaceholderText } = render(<Provider store={store}><ApprovalForm /></Provider>)

    expect(getAllByPlaceholderText('100,000.00').length).toEqual(3)
    expect(getAllByPlaceholderText('eg. “Bond”, “Stocks”').length).toEqual(1)
    expect(getAllByPlaceholderText('850').length).toEqual(1)
  });
});