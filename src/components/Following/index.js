import React from "react";
import {
  FollowingContainer,
  Header,
  FollowingDiv,
  Text,
} from "./FollowingElements";

const Following = () => {
  return (
    <>
      <FollowingContainer>
        <Header>Following</Header>
        <FollowingDiv>
          <Text>You are not following anyone.</Text>
        </FollowingDiv>
      </FollowingContainer>
    </>
  );
};

export default Following;
