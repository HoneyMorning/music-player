import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('should render without throwing an error', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('nav')).toBeTruthy();
  });

  it('should render to static HTML', () => {
    render(<Header />);
    expect(screen.getByText('Music player')).toBeTruthy();
  });
});
