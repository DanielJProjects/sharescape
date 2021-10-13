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

export const ContentDiv = styled.div`
  display: flex;
  margin: 0px 65px;
  margin-top: 20px;
  animation: ${transitionIn} 1.5s;
`;
