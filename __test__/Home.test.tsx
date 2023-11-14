import { test } from 'vitest';
import { render } from '@testing-library/react';
import Home from '../src/pages/index';

test('home', () => {
  render(<Home />);
  // const main = within(screen.getByRole('main'));
});
