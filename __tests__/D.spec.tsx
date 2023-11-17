import * as React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from 'utils/testing-utils';
import QestionDetail from 'src/components/qestionDetail';

jest.mock('src/hooks/useEditQuestion', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    mutate: jest.fn(),
  })),
}));
jest.mock('src/hooks/useQuestionDetail', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: {
      id: 1,
      subject: 'Test Subject 1',
      body: 'Test Body 1',
      comments: [{ id: 1, text: 'Comment 1' }],
    },

    isLoading: false,
  })),
}));
test('adds a comment to the question', async () => {
  jest.mock('next/navigation', () => ({
    useParams: jest.fn(() => ({ id: 'test-question-id' })),
  }));

  const { getByTestId, getByText } = renderWithProviders(
    <QestionDetail id={2} />
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  getByTestId('karnameTextFeild');

  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.click(getByText('ارسال پاسخ'));

  await waitFor(() => {});
});
