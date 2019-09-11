import VoteList from '../VoteList';
import VoteContainer from '../Containers/VoteContainer';
import React from 'react';
import VoteChart from '../VoteChart';
import { mount } from 'enzyme';

describe('<VoteContainer />', () => {
  const voteData = [
    {
      desc: 'test',
      data: [7, 0, 0, 0],
      label: 'vote 1',
    },
    {
      desc: 'test',
      data: [32, 10, 5, 1],
      label: 'vote 2',
    },
    {
      desc: 'test',
      data: [4, 8, 4, 10],
      label: 'vote 3',
    },
    {
      desc: 'test',
      data: [7, 11, 23, 42],
      label: 'vote 4',
    },
  ];

  test('mounts without error', () => {
    mount(<VoteContainer votes={voteData} />);
  });
  test('changeVote is called when vote list is clicked', () => {
    let spy = jest.spyOn(VoteContainer.prototype, 'changeVote');
    let wrapper = mount(<VoteContainer votes={voteData} />);
    let button = wrapper.find('li').last();
    button.simulate('click', { preventDefault: () => {} });
    expect(spy).toHaveBeenCalled();
  });
  test('currentVote and voteIndex are updated on vote change', () => {
    let expectedState = {
      currentVote: {
        desc: 'test',
        data: [4, 8, 4, 10],
        label: 'vote 3',
      },
      voteIndex: 2,
    };

    let wrapper = mount(<VoteContainer votes={voteData} />);
    let instance = wrapper.instance();
    instance.changeVote(2);
    expect(wrapper.state()).toEqual(expectedState);
  });
});

describe('<VoteList />', () => {
  test('renders a list of current votes', () => {});
  test('calls callback on clicking of each list item', () => {});
});
