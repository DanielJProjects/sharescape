import React from "react";
import Loader from "react-loader-spinner";
import { LoadingDiv } from "./LoadingElements";

const Loading = () => {
  return (
    <>
      <LoadingDiv>
        <Loader type="Oval" color="#e4655d" height={60} width={60} />
      </LoadingDiv>
    </>
  );
};

export default Loading;
