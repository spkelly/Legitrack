import React from 'react';
import { mount } from 'enzyme';
import Paginate from '../Paginate';

let testData = [];
for (let i = 0; i < 10; i++) {
  testData.push(<div key={i}>test data {i}</div>);
}

test('renders the correct amount of elements per page', () => {
  let wrapper = mount(<Paginate itemsPerPage={5} data={testData} />);
  expect(wrapper.find('.results__holder').children()).toHaveLength(5);
});

test('calls handlePageChange when new page is clicked', () => {
  const functionSpy = jest.spyOn(Paginate.prototype,'handlePageChange');
  let wrapper = mount(<Paginate itemsPerPage={5} data={testData} />);
  let button = wrapper.find('.pagination__button').last();

  button.simulate('click', { preventDefault: () => {} });
  expect(functionSpy).toHaveBeenCalled();
});
