import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApprovalForm from './ApprovalForm';

describe('<ApprovalForm />', () => {
  test('it should mount', () => {
    render(<ApprovalForm />);
    
    const approvalForm = screen.getByTestId('ApprovalForm');

    expect(approvalForm).toBeInTheDocument();
  });
});