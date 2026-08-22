import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the app with routing context', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(document.body).toBeInTheDocument();
});
