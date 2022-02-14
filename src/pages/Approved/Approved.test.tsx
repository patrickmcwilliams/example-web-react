import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Approved from './Approved';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


describe('<Approved />', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store

  test('it should mount', () => {
    store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}><Approved /></Provider>)

    expect(getByText('Congratulations you qualified')).toBeInTheDocument()
  });
});