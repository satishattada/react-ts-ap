
import React, { Component } from "react";
import './styles.css';
import { withParamsAndNavigate } from "../../routes/with-params-navigate";

export class Login extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validationError: '',
      errors: {
        username: '',
        password: '',

      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="login-container">
          login
        </div>
      </div>
    )
  }
}

export default (withParamsAndNavigate(Login));

