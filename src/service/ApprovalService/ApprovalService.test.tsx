import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApprovalService from './ApprovalService';

describe('<ApprovalService />', () => {
  test('it should mount', () => {
    render(<ApprovalService />);
    
    const approvalService = screen.getByTestId('ApprovalService');

    expect(approvalService).toBeInTheDocument();
  });
});