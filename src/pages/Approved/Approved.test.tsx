import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Approved from './Approved';

describe('<Approved />', () => {
  test('it should mount', () => {
    render(<Approved />);
    
    const approved = screen.getByTestId('Approved');

    expect(approved).toBeInTheDocument();
  });
});