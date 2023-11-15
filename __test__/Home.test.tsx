import { test } from 'vitest';
import Home from '../src/pages/index';
import { renderWithQueryClient } from '../utils/testing-utils';

test('home', () => {
  renderWithQueryClient(<Home />);

  // const main = within(screen.getByRole('main'));
});
