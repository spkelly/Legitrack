import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BillSponsors from '../BillSponsors';

const sponsors = [];

describe('<BillSponsors />',()=>{
  it('displays all sponsors',()=>{
    const wrapper = shallow(<BillSponsors sponsors={sponsors}/>)
  });
  it('displays correct party colors',()=>{
    const wrapper = shallow(<BillSponsors sponsors={sponsors}/>)
  })
})