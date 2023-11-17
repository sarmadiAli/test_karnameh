import Home from 'src/pages';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from 'utils/testing-utils';

jest.mock('src/hooks/useQuestions', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [
      {
        id: 1,
        subject: 'Test Subject 1',
        body: 'Test Body 1',
        comments: [{ id: 1, text: 'Comment 1' }],
      },
      {
        id: 2,
        subject: 'Test Subject 2',
        body: 'Test Body 2',
        comments: [{ id: 2, text: 'Comment 2' }],
      },
    ],
    isLoading: false,
  })),
}));
describe('Home Component', () => {
  it('renders the component properly', async () => {
    renderWithProviders(<Home />);

    // Wait for the loading state to resolve
    await waitFor(() => {
      expect(screen.getByText('Test Subject 1')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Test Subject 2')).toBeInTheDocument();
    });
  });
});
