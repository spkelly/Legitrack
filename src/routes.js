import { Route } from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home';
import BillContainer from './components/Containers/BillContainer';
import Results from './components/Results';
import Header from './components/Header';
import Footer from './components/Footer';

console.log(typeof(Results))

const Routes = (props) => {
  return(
		<div>
			<Header />
				<Route exact path="/" component={ Home }></Route>
				<Route path="/search" component={ Results }></Route>
				<Route path="/bill/:id" component={ BillContainer }></Route>
			<Footer />
		</div>
  );
};


export default Routes;