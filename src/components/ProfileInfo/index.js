import React, { useState } from "react";
import Axios from "axios";
import {
  ProfileInfoContainer,
  CoverPhoto,
  CoverEditBtn,
  ProfilePic,
  ProfilePicEditBtn,
  ProfileInfoDiv,
  ProfileInfoWrapper,
  Name,
  NameFollowers,
  Content,
  FollowersFollowing,
  EditProfileBtn,
  PhotoInput,
} from "./ProfileInfoElements";
import { AiOutlineEdit } from "react-icons/ai";

const ProfileInfo = () => {
  const [editButtonDisplay, setEditButtonDisplay] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [buttonText, setButtonText] = useState("Edit profile");
  const [editing, setEditing] = useState(false);
  const [tempPfp, setTempPfp] = useState();
  const [tempCover, setTempCover] = useState();

  const handleEdit = (e) => {
    e.preventDefault();
    if (editing) {
      setButtonText("Edit profile");
      setInputDisabled(true);
      setEditButtonDisplay(false);
      setEditing(false);
    } else {
      setButtonText("Done");
      setInputDisabled(false);
      setEditButtonDisplay(true);
      setEditing(true);
    }
  };

  const changeName = (e) => {
    let name = e.target.value.trim();
    if (name) {
      localStorage.setItem("name", name);
      let userId = localStorage.getItem("userId");

      Axios.post("https://sharescape-mysql.herokuapp.com/changeProfile", {
        userId: userId,
        name: name,
      });
    }
  };

  const changePicture = (e) => {
    let image = e.target.files[0];
    let toChange = "coverPhoto";
    if (e.target.name === "profilepicinput") {
      toChange = "profilePic";
    }

    let reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem(toChange, reader.result);
      let userId = localStorage.getItem("userId");

      if (toChange === "profilePic") {
        setTempPfp(reader.result);
        Axios.post("https://sharescape-mysql.herokuapp.com/changeProfile", {
          userId: userId,
          profilePic: localStorage.getItem("profilePic"),
        });
      } else {
        setTempCover(reader.result);
        Axios.post("https://sharescape-mysql.herokuapp.com/changeProfile", {
          userId: userId,
          coverImg: localStorage.getItem("coverPhoto"),
        });
      }
      setTempCover(null);
      setTempPfp(null);
    };

    reader.readAsDataURL(image);
  };

  return (
    <>
      <ProfileInfoContainer>
        <ProfileInfoWrapper onSubmit={handleEdit}>
          <CoverPhoto
            src={tempCover ? tempCover : localStorage.getItem("coverPhoto")}
          />
          <PhotoInput
            type="file"
            accept="image/*"
            name="coverinput"
            id="coverinput"
            onChange={changePicture}
          />
          <CoverEditBtn
            htmlFor="coverinput"
            editButtonDisplay={editButtonDisplay}
          >
            <AiOutlineEdit />
          </CoverEditBtn>
          <ProfileInfoDiv>
            <Content>
              <ProfilePic
                src={tempPfp ? tempPfp : localStorage.getItem("profilePic")}
              />
              <ProfilePicEditBtn
                htmlFor="profilepicinput"
                editButtonDisplay={editButtonDisplay}
              >
                <AiOutlineEdit />
              </ProfilePicEditBtn>
              <PhotoInput
                type="file"
                accept="image/*"
                name="profilepicinput"
                id="profilepicinput"
                onChange={changePicture}
              />
              <NameFollowers>
                <Name
                  placeholder={
                    inputDisabled
                      ? localStorage.getItem("name")
                      : "Enter new name..."
                  }
                  disabled={inputDisabled}
                  inputDisabled={inputDisabled}
                  name="name"
                  onChange={changeName}
                />
                <FollowersFollowing>
                  {localStorage.getItem("followers")} Followers &#183;
                  {" " + localStorage.getItem("following")} Following
                </FollowersFollowing>
              </NameFollowers>
            </Content>
            <EditProfileBtn type="submit">{buttonText}</EditProfileBtn>
          </ProfileInfoDiv>
        </ProfileInfoWrapper>
      </ProfileInfoContainer>
    </>
  );
};

export default ProfileInfo;
