import React from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import RegisterBox from "../components/RegisterBox";
import { useGlobalContext } from "../context";

const Register = () => {
  const { isLoading } = useGlobalContext();
  return (
    <>
      {isLoading && <Loading />}
      <Navbar displayOn="none" link="/" />
      <RegisterBox />
    </>
  );
};

export default Register;
