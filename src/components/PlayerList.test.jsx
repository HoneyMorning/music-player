import { render, screen } from '@testing-library/react';
import PlayerList from './PlayerList';

describe('<PlayerList />', () => {
  it('should render without error', () => {
    const { container } = render(<PlayerList />);
    expect(container.querySelector('main')).toBeTruthy();
  });

  it('should li length to be 3', () => {
    const { container } = render(<PlayerList />);
    expect(container.querySelectorAll('li')).toHaveLength(3);
  });

  it('should header text exist', () => {
    render(<PlayerList />);
    expect(screen.getByText('Music List')).toBeTruthy();
  });
});
