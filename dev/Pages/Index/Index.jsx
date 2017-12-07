import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

export class Index extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {


    }

  render() {

    return (
        <div className="index" >
            <div className="productListTitle">最新项目</div>

            <div className="productList">
              首页
            </div>

        </div>

    );
  }
};



export default  Index;

