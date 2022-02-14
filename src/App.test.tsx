import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('<App />', () => {
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
    const { getByText } = render(<Provider store={store}><App /></Provider>)

    expect(getByText('Submit')).toBeInTheDocument()
  });
});