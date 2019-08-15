import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BillDescription from '../BillDescription';

const billDesc = "this is a fake description"

describe('<BillDescription />',()=>{
  it("displays Description text",()=>{
    const wrapper = shallow(<BillDescription text={billDesc} />);

    const descriptionText = wrapper.find('p');
    expect(descriptionText.text()).to.equal(billDesc);
  })
})