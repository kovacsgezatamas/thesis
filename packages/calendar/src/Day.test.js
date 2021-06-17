import React from 'react';
import { shallow } from 'enzyme';

import Day from './Day';

jest.mock('./Day.styled', () => ({
  Container: () => () => 'Container',
  Highlight: () => () => 'Highlight',
}));

describe('<Day /> component', () => {
  function settupShallow(props = {}) {
    const date = new Date();
    return shallow(<Day date={date} {...props} />);
  }

  it('should render correctly for today', () => {
    expect(settupShallow()).toMatchSnapshot();
  });
});
