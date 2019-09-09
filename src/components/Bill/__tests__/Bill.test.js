import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Bill from '../Bill';
import BillDescription from '../BillDescription';
import BillHeading from '../BillHeading';
import testBill from './mockBill';


describe('Bill',()=>{
  test('mounts', () => {
    // simple fix to hide a console.warn message called in from react-dom
    console.warn = jest.fn();
    let container = document.createElement('div');
    ReactDom.render(<Bill currentBill={testBill} />, container);
  });
});

describe('BillDescription', () => {
  test('renders text prop', () => {
    let description = 'test description';
    let wrapper = shallow(<BillDescription text={description} />);
    expect(wrapper.find('.paragraph').text()).toEqual(description);
  });
  test('renders no "no description found" if text prop is undefined', () => {
    let wrapper = shallow(<BillDescription />);
    expect(wrapper.find('.paragraph').text()).toEqual('no description found');
  });
});

describe('BillHeading', () => {
  test('renders text prop', () => {
    let title = 'test title';
    let wrapper = shallow(<BillHeading title={title} />);
    expect(wrapper.find('.heading__primary').text()).toEqual(title);
  });
  test('renders no "no description found" if text prop is undefined', () => {
    let wrapper = shallow(<BillHeading />);
    expect(wrapper.find('.heading__primary').text()).toEqual('Bill Not Found');
  });
});
