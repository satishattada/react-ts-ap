import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import './styles.css';
import { withParamsAndNavigate } from "../../routes/with-params-navigate";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  submitLogout = () => {

  }

  submitProfile = (userData) => {

  }
  render() {
    const{userData}=this.props
    // if no access token, redirect to login
    // if (!this.props.accessToken) {
    //   return <Login />
    // }
    return (
      <div className='layout-container'>
        <div className="page-container">
          <Outlet />
        </div>
      </div>
    );
  }
}
export const mapDispatchToProps = (dispatch) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

export const mapStateToProps = (state) => {
  return {
    accessToken: state.user.accessToken,
    userData:state.user.userData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Layout));
