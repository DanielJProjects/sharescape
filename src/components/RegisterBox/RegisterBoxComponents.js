import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  color: #060606;
`;

export const RegisterWrapper = styled.div`
  border-radius: 20px;
  padding: 30px 50px;
  box-shadow: 0px 0px 10px 1px #cccccc;
  width: 380px;
`;

export const Header = styled.p`
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 25px;
`;

export const Form = styled.form``;

export const Input = styled.input`
  display: block;
  height: 35px;
  padding-left: 8px;
  border: none;
  border-bottom: 1px solid black;
  color: #060606;
  outline: none;
  width: 100%;
  margin-bottom: 30px;
  margin-top: -3px;
  background-color: transparent;
  margin-left: -2px;
`;

export const Select = styled.select`
  display: block;
  height: 35px;
  padding-left: 4px;
  border: none;
  border-bottom: 1px solid black;
  color: #060606;
  outline: none;
  width: 100%;
  margin-bottom: 30px;
  margin-top: -3px;
  background-color: transparent;
  margin-left: -2px;
`;

export const Option = styled.option``;

export const BtnCont = styled.div`
  width: 100%;
  text-align: center;
`;

export const SignUpBtn = styled.button`
  margin-bottom: 5px;
  background-color: #ecb43e;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  color: #f8f8f8;

  &:hover {
    cursor: pointer;
    background-color: #efbd54;
    transition: 0.2s ease-in-out;
  }
`;

export const LogInLinkCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p``;

export const ErrorMessage = styled.p`
  color: #e4655d;
  margin-top: -15px;
  margin-bottom: 20px;
  display: ${({ errorDisplay }) => errorDisplay};
`;

export const LoginLink = styled(Link)`
  color: #e4655d;
  text-decoration: underline;
  text-underline-offset: 1px;
`;
