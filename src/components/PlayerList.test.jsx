import React from 'react';
import { shallow } from 'enzyme';

import PlayerList from './PlayerList';

describe('<PlayerList />', () => {
  it('should render without error', () => {
    expect(shallow(<PlayerList />).find('main')).toHaveLength(1);
  });

  it('should li length to be 3', () => {
    expect(shallow(<PlayerList />).find('li')).toHaveLength(3);
  });

  it('should header text exist', () => {
    expect(shallow(<PlayerList />)
      .find('.card-header')
      .text()).toBe('Music List');
  });
});
