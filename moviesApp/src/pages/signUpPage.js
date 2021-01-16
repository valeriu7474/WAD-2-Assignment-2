import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Button, Form,  } from "semantic-ui-react";

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <br></br>
      <div className="container">
      <div className="text-center">
      <div className="all">
    <h2>SIGN UP</h2>
      </div>
     
      <Form>
        <Form.Field>
          <label>Username</label>
          <input value={userName} placeholder="Username" onChange={e => {setUserName(e.target.value);}}></input><br />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input value={password} type="password" placeholder="password" onChange={e => {setPassword(e.target.value);}}></input><br />
        </Form.Field>
        <Form.Field>
          <label>Password Again</label>
          <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {setPasswordAgain(e.target.value);}}></input><br />
        </Form.Field>
      
      <Button type='submit' onClick={register}>Register</Button>
      </Form>
      </div>
      </div>
    </>
  );
};

export default SignUpPage;