import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '@/components/section/Header';

describe('Header', () => {
  it('renders the header', () => {
    render(<Header header="A long time ago in a galaxy far, far away..." />);

    const header = screen.getByTestId('home-h1');

    expect(header).toHaveTextContent('A long time ago in a galaxy far, far away...');
  });

  it('applies correct CSS classes', () => {
    render(<Header header="" />);

    const header = screen.getByTestId('home-h1');

    expect(header).toHaveClass('text-3xl', 'md:text-6xl', 'font-bold', 'mb-4');
  });

  it('handles empty string', () => {
    render(<Header header="" />);

    const header = screen.getByTestId('home-h1');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('');
  });

  it('renders special characters correctly', () => {
    render(<Header header="Hello & Goodbye <World>" />);

    const header = screen.getByTestId('home-h1');

    expect(header).toHaveTextContent('Hello & Goodbye <World>');
  });
});
