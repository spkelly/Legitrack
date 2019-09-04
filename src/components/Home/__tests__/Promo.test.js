import Promo from '../Promo';
import React from 'react';
import ReactDom from 'react-dom';




test('mounts',()=>{
  const container = document.createElement('div');

  ReactDom.render(<Promo />, container);
});

test('renders children', ()=>{
  const container = document.createElement('div');
  let children = 'test child';
  let rendering = ReactDom.render(<Promo>{children}</Promo>, container);
  expect(container.innerHTML).toContain(children);
});

test('renders content in div with class promo__main',()=>{
  const container = document.createElement('div');
  let children = 'test child';
  let rendering = ReactDom.render(<Promo>{children}</Promo>, container);
});