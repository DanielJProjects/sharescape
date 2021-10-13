import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileBoxContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  margin-top: 50px;
  margin-right: 40px;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  color: #060606;
  padding-top: 23px;
  z-index: 100;
`;

export const ProfileBoxWrapper = styled.div`
  border-radius: 20px;
  padding: 10px 30px;
  box-shadow: 0px 0px 10px 1px #cccccc;
  width: 350px;
  background-color: #f8f8f8;
`;

export const ProfileInfoDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 25px 0px;
  border-bottom: 1px solid #cccccc;
`;

export const ProfilePicLink = styled(Link)``;

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  margin-left: 15px;
`;

export const Name = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 15px;
  color: #060606;
  font-weight: 800;
  margin-bottom: 4px;
`;

export const SeeProfile = styled(Link)`
  text-decoration: none;
  color: #e4655d;
  display: block;

  &:hover {
    cursor: pointer;
    color: #f27971;
    transition: 0.2s ease-in-out;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  padding-left: 8px;

  &:hover {
    cursor: pointer;
    color: #e4655d;
    transition: 0.2s ease-in-out;
  }
`;

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  padding-left: 8px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
    color: #e4655d;
    transition: 0.2s ease-in-out;
  }
`;

export const FeedbackIcon = styled.p`
  font-size: 20px;
  height: 18px;
`;

export const Icon = styled.p`
  font-size: 20px;
  height: 20px;
`;

export const Text = styled.p`
  font-size: 15px;
  margin-left: 13px;
`;
