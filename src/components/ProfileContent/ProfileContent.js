import styled, { keyframes } from "styled-components";

const transitionIn = keyframes`
  from {
    opacity: 0;
    margin-top: 50px;
  }
  to {
    opacity: 1;
    margin-top: 20px
  }
`;

export const AllContent = styled.div`
  animation: ${transitionIn} 1.5s;
`;

export const ProfileContentContainer = styled.div`
  display: flex;
  margin: 20px 200px 80px 200px;
`;

export const InfoDiv = styled.div`
  width: 24%;
  margin-right: 25px;
`;
