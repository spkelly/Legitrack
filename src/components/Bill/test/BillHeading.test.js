import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BillHeading from '../BillHeading';

const billTitle = "Fake Bill"

describe('<BillHeading />',()=>{
  it("Displays title of Bill in h1 element",()=>{
    const wrapper = shallow(<BillHeading title={billTitle}/>);
    const header = wrapper.find('h1');
    expect(header.text()).to.equal(billTitle);
  })
})