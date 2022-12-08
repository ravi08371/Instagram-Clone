import React from "react";
import firebase from "./fire";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className="container">
      <h1 className="title">Instagram</h1>
      <input
        type="text"
        placeholder="Phone number, username or email address"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="errormsg">{emailError}</p>

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="errormsg">{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Log in</button>
            <p>
              Don't have an account ?
              <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignup}>Sign up</button>
            <p>
              Have an account ?
              <span onClick={() => setHasAccount(!hasAccount)}>Log in</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
