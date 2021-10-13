import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  Logo,
  NavbarItems,
  Input,
  Icon,
  ProfilePic,
  ProfilePicDiv,
  OnlineIcon,
} from "./NavbarComponents";

import { FiUsers, FiBell } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { useGlobalContext } from "../../context";

const Navbar = ({ displayOn, link }) => {
  const { setProfileBoxDisplay, setShowFollowerBox, setShowNotifs } =
    useGlobalContext();
  const toggleProfileBox = (bool) => {
    setProfileBoxDisplay(bool);
  };

  const toggleFollowerBox = (bool) => {
    setShowFollowerBox(bool);
  };

  const toggleNotifs = (bool) => {
    setShowNotifs(bool);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo to={link}>sharescape</Logo>
        <NavbarItems displayOn={displayOn}>
          <Input placeholder="Search..." />
          <Icon
            onMouseEnter={() => toggleNotifs(true)}
            onMouseLeave={() => toggleNotifs(false)}
          >
            <FiBell />
          </Icon>
          <Icon
            onMouseEnter={() => toggleFollowerBox(true)}
            onMouseLeave={() => toggleFollowerBox(false)}
          >
            <FiUsers />
          </Icon>
          <ProfilePicDiv>
            <ProfilePic
              src={localStorage.getItem("profilePic")}
              onMouseEnter={() => toggleProfileBox(true)}
              onMouseLeave={() => toggleProfileBox(false)}
            />
            <OnlineIcon>
              <BsCircleFill />
            </OnlineIcon>
          </ProfilePicDiv>
        </NavbarItems>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
