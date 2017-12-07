/**
* 整个项目的入口
* @author : Mantou
* @date : 2016-03-01
*/
import React ,{Component} from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from './Common/Menu'
import Footer from './Common/Footer'

class App extends Component {
	constructor(props) {
		super(props);
	}

  render() {
			return (
				<div className="app">
					<Menu />
					{this.props.children}
					<Footer/>
				</div>
			);

  }
}

export default App;
