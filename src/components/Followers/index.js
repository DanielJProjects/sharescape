import React from "react";
import {
  FollowersContainer,
  Header,
  FollowersDiv,
  Text,
} from "./FollowersElements";

const Followers = () => {
  return (
    <>
      <FollowersContainer>
        <Header>Followers</Header>
        <FollowersDiv>
          <Text>You currently have no followers.</Text>
        </FollowersDiv>
      </FollowersContainer>
    </>
  );
};

export default Followers;
