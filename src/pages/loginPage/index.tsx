import "./styles.scss";
import { withParamsAndNavigate } from "../../routes/with-params-navigate";
import { connect } from "react-redux";
import React, { useState } from "react";

type LoginProps = {
  token: String;
  navigate: (link: String) => void;
  accessToken: String;
};
const LoginPage = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      props.navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <span className="header-style">{"USER LOGIN"}</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit">{"Login"}</button>
        </form>
      </div>
    </>
  );
};
export const mapStateToProps = (state: any) => {
  return {
    accessToken: state.users.accessToken,
    userData: state.users.userData,
  };
};
export default connect(mapStateToProps, null)(withParamsAndNavigate(LoginPage));
