import { Route } from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home';
import BillContainer from './components/Containers/BillContainer';
import Results from './components/Results/Results';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Routes = (props) => {
	return(
		<div>
			<Header />
			<Route path="/search" component={ Results }></Route>
			<Route path="/bill/:id" component = { BillContainer }></Route>
			<Route exact path="/" component={ Home }></Route>
			<Footer />
		</div>
	)
}


export default Routes;