import styled from "styled-components";

export const PhotosContainer = styled.div`
  color: #060606;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
`;

export const PhotosDiv = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 1px #cccccc;
  padding: ${({ photosPosted }) =>
    photosPosted ? "5px 10px 5px 10px" : "10px 10px 10px 20px"};
`;

export const Header = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
  margin-left: 5px;
`;

export const Text = styled.p``;

export const Images = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 10px 0px;
  width: 100%;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`;
