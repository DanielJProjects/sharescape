import React from "react";
import FollowerReqs from "../components/FollowerReqs";
import Navbar from "../components/Navbar";
import Notifs from "../components/Notifs";
import ProfileBox from "../components/ProfileBox";
import ProfileContent from "../components/ProfileContent";
import { useGlobalContext } from "../context";

const Profile = () => {
  const { profileBoxDisplay, showFollowerBox, showNotifs } = useGlobalContext();

  return (
    <>
      <Navbar displayOn="flex" link="/dashboard" />
      {profileBoxDisplay && <ProfileBox />}
      {showFollowerBox && <FollowerReqs />}
      {showNotifs && <Notifs />}
      <ProfileContent />
    </>
  );
};

export default Profile;
