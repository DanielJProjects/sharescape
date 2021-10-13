import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const transition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PostDiv = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 1px #cccccc;
  color: #060606;
  padding: 20px 20px 0px 20px;
  margin-top: 20px;
  position: relative;
  animation: ${transition} 1.5s;
`;

export const MoreIcon = styled.p`
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileLink = styled(Link)``;

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;
`;

export const NameTimeDiv = styled.div`
  margin-left: 10px;
`;

export const Name = styled(Link)`
  font-weight: 800;
  color: #060606;
  text-decoration: none;
`;

export const TimePosted = styled.p`
  margin: 0;
  margin-top: 1px;
`;

export const PostContent = styled.div`
  margin-left: 3px;
  margin-top: 15px;
`;

export const Text = styled.p`
  margin-bottom: ${({ imageAttached }) => (imageAttached ? "20px" : 0)};
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const InteractButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  border-top: 1px solid #ccc;
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  color: ${({ liked }) => (liked ? "#ecb43e" : "#060606")};

  &:hover {
    cursor: pointer;
    color: #ecb43e;
    transition: 0.2s ease-in-out;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;

  &:hover {
    cursor: pointer;
    color: #ecb43e;
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.p`
  font-size: 20px;
`;

export const Number = styled.p`
  margin-bottom: 16px;
  margin-left: 5px;
`;

export const MoreOptionsDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 30px;
  margin-right: 15px;
  padding-top: 8px;
  display: ${({ showMoreOptions }) => (showMoreOptions ? "block" : "none")};
`;

export const MoreOptionsCont = styled.div`
  box-shadow: 0px 0px 6px 1px #cccccc;
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 70px;
`;

export const Option = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  height: 35px;
  padding-left: 10px;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;
