import styled from "styled-components";
import Textarea from "react-expanding-textarea";

export const PostsContainer = styled.div`
  width: ${({ widthToSet }) => widthToSet};
  color: #060606;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  margin-bottom: 30px;
`;

export const PostsWrapper = styled.div``;

export const Header = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 12px;
  margin-left: 5px;
`;

export const CreatePostDiv = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 1px #cccccc;
  display: flex;
  padding: 20px;
`;

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50px;
`;

export const Form = styled.form`
  margin-left: 10px;
  width: 100%;
  height: max-content;
`;

export const Input = styled(Textarea)`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  padding: 16px 15px;
  outline-color: #060606;
  resize: none;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostButton = styled.button`
  border: none;
  background-color: #ecb43e;
  border-radius: 50px;
  padding: 10px 20px;
  color: #f8f8f8;

  &:hover {
    cursor: pointer;
    background-color: #efbd54;
    transition: 0.2s ease-in-out;
  }
`;

export const AddPhoto = styled.label`
  &:hover {
    cursor: pointer;
    color: #e4655d;
    transition: 0.2s ease-in-out;
  }
`;

export const InputPhoto = styled.input`
  visibility: hidden;
`;

export const PreviewPhoto = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
