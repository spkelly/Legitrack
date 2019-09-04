import React from 'react';
import reactDom from 'react-dom';
import Search from '../Search';
import {render,mount,shallow} from 'enzyme';

let mockSearchCallback = jest.fn();


test('mounts',()=>{
  const container = document.createElement('div');
  reactDom.render(<Search />, container);
});

test('calls handleSearch callback when search is performed',()=>{
  let wrapper = shallow(<Search cb={mockSearchCallback}/>);
  wrapper.find('input').simulate('change',{target:{value:'test'}});
  wrapper.find('button').simulate('click',{preventDefault:()=>{}});
  expect(mockSearchCallback).toHaveBeenCalledTimes(1);
});

test('renders error when search term is too short', ()=>{
  let wrapper = shallow(<Search cb={mockSearchCallback}/>);
  wrapper.find('input').simulate('change',{target:{value:'te'}});
  wrapper.find('button').simulate('click',{preventDefault:()=>{}});
  expect(wrapper.state().err).toBe(true);
})