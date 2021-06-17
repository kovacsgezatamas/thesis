import React from 'react';
import { shallow } from 'enzyme';
import { isToday } from 'date-fns';

import Day from './Day';

jest.mock('date-fns', () => ({ isToday: jest.fn() }));

jest.mock('./Day.styled', () => ({
  Container: () => () => 'Container',
  Highlight: () => () => 'Highlight',
}));

describe('<Day /> component', () => {
  function setupShallow(props = {}) {
    const date = new Date('2021-01-04T14:00:00Z');
    return shallow(<Day date={date} {...props} />);
  }

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should show the day number', () => {
    const wrapper = setupShallow({ date: new Date('2021-01-13T14:00:00Z') });
    const container = wrapper.find('Container');
    expect(container.children().text()).toEqual('13');
  });

  it('should render correctly', () => {
    expect(setupShallow()).toMatchSnapshot();
  });

  it('should render empty container if the date prop is not sent', () => {
    expect(setupShallow({
      date: null,
    })).toMatchSnapshot();
  })

  it('should render correctly for today', () => {
    isToday.mockReturnValueOnce(true);
    expect(setupShallow()).toMatchSnapshot();
  });

  it('should render correctly for weekend day', () => {
    expect(setupShallow({
      date: new Date('2021-01-17T17:00:00Z')
    })).toMatchSnapshot();
  });

  it('should render correctly if is in the highlighted interval', () => {
    expect(setupShallow({
      date: new Date('2021-01-13T14:00:00Z'),
      highlighted: {
        start: new Date('2021-01-09T14:00:00Z'),
        end: new Date('2021-01-22T14:00:00Z'),
      },
    })).toMatchSnapshot();
  });

  it('should render correctly if is at the beginning of the highlighted interval', () => {
    expect(setupShallow({
      date: new Date('2021-01-13T14:00:00Z'),
      highlighted: {
        start: new Date('2021-01-13T14:00:00Z'),
        end: new Date('2021-01-22T14:00:00Z'),
      },
    })).toMatchSnapshot();
  });

  it('should render correctly if is at the end of the highlighted interval', () => {
    expect(setupShallow({
      date: new Date('2021-01-13T14:00:00Z'),
      highlighted: {
        start: new Date('2021-01-08T14:00:00Z'),
        end: new Date('2021-01-13T14:00:00Z'),
      },
    })).toMatchSnapshot();
  });

  it('should render correctly if is in the selected interval', () => {
    expect(setupShallow({
      date: new Date('2021-01-13T14:00:00Z'),
      selected: {
        start: new Date('2021-01-09T14:00:00Z'),
        end: new Date('2021-01-22T14:00:00Z'),
      },
    })).toMatchSnapshot();
  });

  it('should render correctly if is at the beginning of the selected interval', () => {
    expect(setupShallow({
      date: new Date('2021-01-13T14:00:00Z'),
      selected: {
        start: new Date('2021-01-13T14:00:00Z'),
        end: new Date('2021-01-22T14:00:00Z'),
      },
    })).toMatchSnapshot();
  });

  it('should render correctly if is at the end of the selected interval', () => {
    expect(setupShallow({
      date: new Date('2021-01-13T14:00:00Z'),
      selected: {
        start: new Date('2021-01-08T14:00:00Z'),
        end: new Date('2021-01-13T14:00:00Z'),
      },
    })).toMatchSnapshot();
  });

  it('should render correctly if is in the selected and highlighted interval', () => {
    expect(setupShallow({
      date: new Date('2021-01-13T14:00:00Z'),
      selected: {
        start: new Date('2021-01-09T14:00:00Z'),
        end: new Date('2021-01-22T14:00:00Z'),
      },
      highlighted: {
        start: new Date('2021-01-08T14:00:00Z'),
        end: new Date('2021-01-23T14:00:00Z'),
      },
    })).toMatchSnapshot();
  });
});
