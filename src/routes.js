import { Route} from 'react-router-dom';
import React from 'react';

import Home from './components/Home/Home';
import Bill from './components/Bill/Bill';
import Results from './components/Results/Results';


const Routes = (props) => {
	return(
		<div>
			<Route exact path="/" component={ Home }></Route>
			<Route path="/results" compornent={ Results }></Route>
			<Route path="/bill/:id" component = { Bill }></Route>
		</div>
	)
}


export default Routes;