import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Disqualifed from './Disqualifed';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('<Disqualifed />', () => {
  const initialState = {
    errors:{
      disqualifiedMessage: 'test error'
    }
  }
  const mockStore = configureStore()
  let store

  test('it should mount', () => {
    store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}><Disqualifed /></Provider>)

    expect(getByText('test error')).toBeInTheDocument()
  });
});