import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Disqualifed from './Disqualifed';

describe('<Disqualifed />', () => {
  test('it should mount', () => {
    render(<Disqualifed />);
    
    const disqualifed = screen.getByTestId('Disqualifed');

    expect(disqualifed).toBeInTheDocument();
  });
});