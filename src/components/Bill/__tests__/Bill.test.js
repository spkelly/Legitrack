
import React from 'react';
import ReactDom from 'react-dom';
import Bill from '../Bill';
import testBill from './bill';

test('mounts',()=>{
  let container = document.createElement('div');
  ReactDom.render(<Bill currentBill={testBill}/>, container);
});