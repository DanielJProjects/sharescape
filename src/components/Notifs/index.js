import React from "react";
import { NotifsContainer, NotifsWrapper, Text } from "./NotifsElements";
import { useGlobalContext } from "../../context";

const Notifs = () => {
  const { setShowNotifs } = useGlobalContext();
  const toggleBox = (bool) => {
    setShowNotifs(bool);
  };
  return (
    <>
      <NotifsContainer
        onMouseEnter={() => toggleBox(true)}
        onMouseLeave={() => toggleBox(false)}
      >
        <NotifsWrapper>
          <Text>You have no new notifications.</Text>
        </NotifsWrapper>
      </NotifsContainer>
    </>
  );
};

export default Notifs;
