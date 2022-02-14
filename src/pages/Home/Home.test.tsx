import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('<Home />', () => {
  const initialState = {
    approvalForm: {
      formValues: {
        amount: 0,
        type: '',
        worth: 0,
        income: 0,
        credit: 0,
      }
    },
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
    const { getByText } = render(<Provider store={store}><Home /></Provider>)

    expect(getByText('Submit')).toBeInTheDocument()
  });
});