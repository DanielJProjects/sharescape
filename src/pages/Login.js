import React from "react";
import LoginBox from "../components/LoginBox";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar displayOn="none" link="/" />
      <LoginBox />
    </>
  );
};

export default Login;
