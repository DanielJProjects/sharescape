import React from "react";
import {
  FollowerReqsContainer,
  FollowerReqsWrapper,
  Text,
} from "./FollowerReqsElements";
import { useGlobalContext } from "../../context";

const FollowerReqs = () => {
  const { setShowFollowerBox } = useGlobalContext();

  const toggleBox = (bool) => {
    setShowFollowerBox(bool);
  };

  return (
    <>
      <FollowerReqsContainer
        onMouseEnter={() => toggleBox(true)}
        onMouseLeave={() => toggleBox(false)}
      >
        <FollowerReqsWrapper>
          <Text>You have no new follower requests.</Text>
        </FollowerReqsWrapper>
      </FollowerReqsContainer>
    </>
  );
};

export default FollowerReqs;
