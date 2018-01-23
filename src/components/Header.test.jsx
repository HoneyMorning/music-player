import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Header />).find('nav')).toHaveLength(1);
  });

  it('should render to static HTML', () => {
    expect(shallow(<Header />).text()).toEqual('Music player');
  });
});
