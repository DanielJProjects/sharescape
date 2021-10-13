import React from "react";
import Posts from "../Posts";
import Questions from "../Questions";
import { ContentDiv } from "./ContentElements";

const Content = () => {
  return (
    <>
      <ContentDiv>
        <Posts widthToSet="55%" />
        <Questions />
      </ContentDiv>
    </>
  );
};

export default Content;
