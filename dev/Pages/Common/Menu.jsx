import './style.scss';
import React,{Component, PropTypes} from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
class Menu extends Component {
    constructor(props) {
        super(props);
    }

  render() {

      return (
        <div className="navbar">
              <div>
                  <div>中国最大的债券资产云交易平台</div>
                  <div>
                      债券资产云交易开放平台
                  </div>
              </div>

        </div>
    );
  }
}

export default  Menu;