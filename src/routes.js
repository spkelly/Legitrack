import { Route} from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home';
import Bill from './components/Bill/Bill';
import Results from './components/Results/Results';
import Header from './components/Header/Header';

const Routes = (props) => {
	return(
		<div>
			<Header />
			<Route path="/search" component={ Results }></Route>
			<Route path="/bill/:id" component = { Bill }></Route>
			<Route exact path="/" component={ Home }></Route>
		</div>
	)
}


export default Routes;