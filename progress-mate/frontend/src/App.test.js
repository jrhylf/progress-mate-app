import { render, screen } from '@testing-library/react';
import App from './App';

test('renders animated background', () => {
  render(<App />);
  const animatedBg = screen.getByTitle('area');
  expect(animatedBg).toBeInTheDocument();
});
