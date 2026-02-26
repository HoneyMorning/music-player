import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render a section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('section')).toBeTruthy();
  });
});
