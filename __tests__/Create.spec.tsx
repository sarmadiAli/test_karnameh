/* eslint-disable */
import * as React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from 'utils/testing-utils';
import CreateQuestionModal from 'src/components/createQuestion';

jest.mock('src/hooks/useCreateQuestion', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    mutate: jest.fn(),
    isLoading: false,
  })),
}));

test('renders CreateQuestionModal component with successful response', async () => {
  // Mock isOpen and closeModal functions
  const isOpen = true;
  const closeModal = jest.fn();

  const { getByLabelText, getByText } = renderWithProviders(
    <CreateQuestionModal isOpen={isOpen} closeModal={closeModal} />
  );

  expect(getByLabelText('موضوع')).toBeInTheDocument();
  expect(getByLabelText('متن سوال')).toBeInTheDocument();

  fireEvent.change(getByLabelText('موضوع'), {
    target: { value: 'Test Subject' },
  });
  fireEvent.change(getByLabelText('متن سوال'), {
    target: { value: 'Test Body' },
  });

  fireEvent.click(getByText('ایجاد سوال'));

  await waitFor(() => {});
});
