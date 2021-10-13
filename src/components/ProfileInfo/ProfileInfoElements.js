import styled from "styled-components";

export const ProfileInfoContainer = styled.div`
  margin: 0px 200px;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  color: #060606;
  margin-top: 20px;
`;

export const ProfileInfoWrapper = styled.form`
  width: 100%;
  position: relative;
`;

export const CoverPhoto = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  box-shadow: 0px 0px 6px 1px #cccccc;
  border-radius: 20px;
`;

export const ProfileInfoDiv = styled.div`
  box-shadow: 0px 0px 6px 1px #cccccc;
  background-color: #f8f8f8;
  border-radius: 20px;
  display: flex;
  height: 150px;
  justify-content: space-between;
  padding: 10px 10px;
  margin-top: 12px;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
`;

export const ProfilePic = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 20px;
  object-fit: cover;
`;

export const NameFollowers = styled.div`
  margin-left: 15px;
  margin-top: 15px;
`;

export const Name = styled.input`
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 7px;
  background-color: transparent;
  color: #060606;
  border: none;
  padding: 0;
  height: 20px;
  outline: none;

  &::placeholder {
    color: ${({ inputDisabled }) => (inputDisabled ? "#060606" : "#CCCCCC")};
  }
`;

export const FollowersFollowing = styled.p`
  margin: 0px;
`;

export const EditProfileBtn = styled.button`
  height: 40px;
  width: 100px;
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid #060606;
  margin-right: 12px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
    border-color: #ecb43e;
    transition: 0.2s ease-in-out;
    color: #ecb43e;
  }
`;

export const ProfilePicEditBtn = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 212px;
  margin-bottom: 8px;
  font-size: 18px;
  background-color: #f8f8f8;
  height: 25px;
  padding: 0px 4px;
  display: ${({ editButtonDisplay }) => (editButtonDisplay ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #fcfcfc;
    transition: 0.2s ease-in-out;
  }
`;

export const CoverEditBtn = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 9px;
  margin-bottom: 175px;
  font-size: 18px;
  background-color: #f8f8f8;
  height: 25px;
  padding: 0px 4px;
  display: ${({ editButtonDisplay }) => (editButtonDisplay ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #fefefe;
    transition: 0.2s ease-in-out;
  }
`;

export const PhotoInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;
