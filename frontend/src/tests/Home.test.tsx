import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to Hava Nagila/i)).toBeInTheDocument();
  });
});
