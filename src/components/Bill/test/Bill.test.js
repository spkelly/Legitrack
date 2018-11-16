import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Bill from '../Bill';


describe("<Bill>", ()=>{
  it("mocha is working correctly",()=>{
    expect(1==2,"One does not equal 2").to.be.false;
  });
});
