import React from 'react';
import ReactDom from 'react-dom';
import About from '../Home';


test('mounts', ()=>{
  const container = document.createElement('div');
  ReactDom.render(<About />, container);
});