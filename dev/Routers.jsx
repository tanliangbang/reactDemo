import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute} from 'react-router' // 路由


import Index from './Pages/Index/Index';
//App为入口
import App from './Pages/App';



export const routes = {
	path: '/',
	component: App,
	indexRoute: {component: Index},
	childRoutes: [{
		path: '/index',
		component: Index,
	}
   ],

}

class Routers extends Component {

	render() {
		return (
			<Router history={this.props.history} routes={routes}>

			</Router>
		);
	}
}

export default Routers;