import React from "react";
import { ProfileContentContainer, InfoDiv, AllContent } from "./ProfileContent";
import Posts from "../Posts";
import ProfileInfo from "../ProfileInfo";
import Followers from "../Followers";
import Following from "../Following";
import Photos from "../Photos";

const ProfileContent = () => {
  return (
    <>
      <AllContent>
        <ProfileInfo />
        <ProfileContentContainer>
          <InfoDiv>
            <Photos />
            <Followers />
            <Following />
          </InfoDiv>
          <Posts widthToSet="76%" />
        </ProfileContentContainer>
      </AllContent>
    </>
  );
};

export default ProfileContent;
