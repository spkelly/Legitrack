import React from 'react';
import PaginationBar from '../PaginationBar';
import { shallow } from 'enzyme';

describe('PaginationBar', () => {
  test('displays the correct number of page buttons', () => {
    let pageCount = 5;
    let wrapper = shallow(
      <PaginationBar pageCount={pageCount} handleClick={() => {}} />
    );

    expect(wrapper.find('.pagination__button')).toHaveLength(pageCount);
  });

  test('clicking on a page button calls onClick handler', () => {
    let mockClickHandler = jest.fn();
    let wrapper = shallow(
      <PaginationBar pageCount={5} handleClick={mockClickHandler} />
    );
    wrapper
      .find('.pagination__button')
      .last()
      .simulate('click', { preventDefault: () => {} });

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
