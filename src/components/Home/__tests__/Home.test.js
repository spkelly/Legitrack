import React from 'react';
import ReactDom from 'react-dom';
import Home from '../Home';
import {mount} from 'enzyme';

const historyMock = {
  push: jest.fn(),
};


test('mounts', ()=>{
  const container = document.createElement('div');
  ReactDom.render(<Home history={historyMock}/>, container);
});

test('contains a searchbar and button', ()=>{
  const container = document.createElement('div');
  ReactDom.render(<Home history={historyMock}/>, container);

  let search = container.querySelector('input');
  let button = container.querySelector('button');

  
  expect(search).not.toBeUndefined();
  expect(button).not.toBeUndefined();
});

test('modifies the history when search is performed',()=>{
  const container = document.createElement('div');
  let wrapper = mount(<Home history={historyMock}/>, container);

  wrapper.find('input').simulate('change',{target:{value:'test'}});
  wrapper.find('button').simulate('click',{preventDefault:()=>{}});

  expect(historyMock.push).toHaveBeenCalled();
});