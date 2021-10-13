import React from "react";
import LoginBox from "../components/LoginBox";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

const Login = () => {
  const { isLoading } = useGlobalContext();

  return (
    <>
      {isLoading && <Loading />}
      <Navbar displayOn="none" link="/" />
      <LoginBox />
    </>
  );
};

export default Login;
