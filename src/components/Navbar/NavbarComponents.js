import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const animationIn = keyframes`
  from {
    opacity: 0;
    margin-bottom: 50px;

  }
  to {
    opacity: 1;
    margin-bottom: 0px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 85px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #f8f8f8;
  z-index: 99;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  margin: 0px 70px;
  width: 100%;
  justify-content: space-between;
  animation: ${animationIn} 1.5s;
`;

export const Logo = styled(Link)`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: #ecb43e;
  font-size: 35px;
`;

export const NavbarItems = styled.div`
  align-items: center;
  display: ${({ displayOn }) => displayOn};
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 25px;
  border: 2px solid #060606;
  background-color: transparent;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  width: 350px;
  padding-left: 12px;
  outline-color: #ecb43e;
  color: #060606;
  margin-right: 25px;
`;

export const Icon = styled.p`
  font-size: 22px;
  color: #060606;
  margin-right: 20px;
  height: 22px;

  &:hover {
    cursor: pointer;
    color: #ecb43e;
    transition: 0.3s ease-in-out;
  }
`;

export const ProfilePicDiv = styled.div`
  display: flex;
  margin-bottom: 3px;
  position: relative;
`;

export const ProfilePic = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50px;
  border: 2px solid #060606;

  &:hover {
    cursor: pointer;
  }
`;

export const OnlineIcon = styled.p`
  position: absolute;
  color: #59bf39;
  font-size: 10px;
  border: 2px solid #f5f5f5;
  border-radius: 50px;
  width: 14px;
  height: 14px;
  top: 0;
  left: 0;
  margin-top: 22px;
  margin-left: 22px;
`;
