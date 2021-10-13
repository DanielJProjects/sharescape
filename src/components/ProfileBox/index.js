import React from "react";
import {
  ProfileBoxContainer,
  ProfileBoxWrapper,
  ProfileInfo,
  ProfileInfoDiv,
  Name,
  SeeProfile,
  ProfilePic,
  ProfilePicLink,
  LinksDiv,
  Feedback,
  FeedbackIcon,
  Icon,
  Text,
} from "./ProfileBoxComponents";
import { BiExit, BiCommentError } from "react-icons/bi";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../context";

const ProfileBox = () => {
  const history = useHistory();
  const navigateTo = () => {
    setProfileBoxDisplay(false);
    history.push("/");
  };
  const { setProfileBoxDisplay } = useGlobalContext();
  const toggleBox = (bool) => {
    setProfileBoxDisplay(bool);
  };
  return (
    <>
      <ProfileBoxContainer
        onMouseEnter={() => toggleBox(true)}
        onMouseLeave={() => toggleBox(false)}
      >
        <ProfileBoxWrapper>
          <ProfileInfoDiv>
            <ProfilePicLink
              to="/profile"
              onClick={() => {
                toggleBox(false);
              }}
            >
              <ProfilePic src={localStorage.getItem("profilePic")} />
            </ProfilePicLink>
            <ProfileInfo>
              <Name
                to="/profile"
                onClick={() => {
                  toggleBox(false);
                }}
              >
                {localStorage.getItem("name")}
              </Name>
              <SeeProfile
                to="/profile"
                onClick={() => {
                  toggleBox(false);
                }}
              >
                View your profile
              </SeeProfile>
            </ProfileInfo>
          </ProfileInfoDiv>
          <Feedback>
            <FeedbackIcon>
              <BiCommentError />
            </FeedbackIcon>
            <Text>Give feedback</Text>
          </Feedback>
          <LinksDiv>
            <Icon>
              <FiSettings />
            </Icon>
            <Text>Settings & Privacy</Text>
          </LinksDiv>
          <LinksDiv>
            <Icon>
              <FiHelpCircle />
            </Icon>
            <Text>Help & Support</Text>
          </LinksDiv>
          <LinksDiv onClick={navigateTo}>
            <Icon>
              <BiExit />
            </Icon>
            <Text>Logout</Text>
          </LinksDiv>
        </ProfileBoxWrapper>
      </ProfileBoxContainer>
    </>
  );
};

export default ProfileBox;
