import React from "react";
import Content from "../components/Content";
import FollowerReqs from "../components/FollowerReqs";
import Navbar from "../components/Navbar";
import Notifs from "../components/Notifs";
import ProfileBox from "../components/ProfileBox";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const { profileBoxDisplay, showFollowerBox, showNotifs } = useGlobalContext();

  return (
    <>
      <Navbar displayOn="flex" link="/dashboard" />
      {profileBoxDisplay && <ProfileBox />}
      {showFollowerBox && <FollowerReqs />}
      {showNotifs && <Notifs />}
      <Content />
    </>
  );
};

export default Dashboard;
