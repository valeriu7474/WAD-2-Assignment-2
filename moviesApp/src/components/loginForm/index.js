
import { withRouter } from "react-router-dom";

import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import { Link } from "react-router-dom";



const LoginForm = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
    <div className="all">
    <h2>LOGIN</h2>
      </div>







      <div class="login-page">


  <div class="form">


  <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input>

      <br />

      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input>

      <button onClick={login}>Log in</button>



      <p class="message">Not registered? <Link to="/signup">Create an account</Link></p>



  
  </div>
</div>


    </>
  );
};

export default withRouter(LoginForm);