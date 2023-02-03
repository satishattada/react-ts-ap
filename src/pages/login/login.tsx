
import './styles.css';
import { withParamsAndNavigate } from "../../routes/with-params-navigate";
import { connect } from 'react-redux';
import React, { useState } from 'react';

type LoginProps = {
  token: String,
  navigate: (link: String) => void;
  accessToken: String
}
const Login = (props: LoginProps) => {
  const [count, setCount] = useState(0);
  const navigateTo = () => {
    props.navigate('/')
  }
  return (
    <>
    <div>Login </div>
    <button onClick={navigateTo}>layout</button>

    </>
  )
}
export const mapStateToProps = (state: any) => {
  return {
    accessToken: state.user.accessToken,
    userData: state.user.userData
  };
};
export default connect(mapStateToProps, null)(withParamsAndNavigate(Login));

