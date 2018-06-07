import BillHeading from '../Bill/BillHeading';
import { shallow } from 'enzyme';
import React from 'react';


const TITLE = 'I\'m just a bill';
const BILL_NUMBER = '12345';
const DEFAULT_TITLE = 'Bill Not Found';
const DEFAULT_NUMBER = '0000';

function setup(title, number){
  const wrapper = shallow(<BillHeading title={title} number={number} />);

  return{
    title: wrapper.find('h1.heading__primary'),
    number: wrapper.find('p.paragraph') 
  };
}


describe('<BillHeading />',()=>{

  it('should display the given title of the bill in a <h1> tag with the className of primary heading', ()=> {
    const component = setup(TITLE, BILL_NUMBER);

    expect(component.title.length).toEqual(1);
    expect(component.title.text()).toEqual(TITLE);
  });

  it('should display the given number for the bill', () =>{
    const component = setup(TITLE, BILL_NUMBER);

    expect(component.number.length).toEqual(1);
    expect(component.number.text()).toEqual(BILL_NUMBER);
  });

  it('should display placeholder text if the given title is undefined', ()=>{
    const component = setup();

    expect(component.title.text()).toEqual(DEFAULT_TITLE);
  });

  it('should display placeholder text if the given title is undefined', ()=>{
    const component = setup();

    expect(component.number.text()).toEqual(DEFAULT_NUMBER);
  });
});