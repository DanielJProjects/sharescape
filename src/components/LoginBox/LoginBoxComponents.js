import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  color: #060606;
`;

export const LoginWrapper = styled.div``;

export const Header = styled.p`
  font-weight: 800;
  font-size: 25px;
  text-align: center;
  margin-bottom: 30px;
`;

export const LoginReg = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 30px 50px;
  box-shadow: 0px 0px 10px 1px #cccccc;
  width: 900px;
`;

export const Login = styled.div`
  width: 45%;
  padding: 0px 45px 0px 0px;
`;

export const Register = styled.div`
  padding: 0px 0px 0px 45px;
  border-left: 1px solid #535353;
  width: 55%;
`;

export const SubHeader = styled.p`
  font-size: 18px;
  font-weight: 800;
`;

export const Form = styled.form``;

export const Input = styled.input`
  display: block;
  height: 35px;
  padding-left: 2px;
  border: none;
  border-bottom: 1px solid #060606;
  color: #060606;
  outline: none;
  width: 100%;
  margin-bottom: 21px;
  margin-top: -3px;
  background-color: transparent;
  margin-left: -2px;
`;

export const LoginButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: -3px;
`;

export const LoginButton = styled.button`
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

export const ForgotPassword = styled.p`
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export const RegButton = styled(Link)`
  background-color: #e4655d;
  border: none;
  border-radius: 50px;
  color: #f8f8f8;
  padding: 9px 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #eb746d;
    transition: 0.2s ease-in-out;
  }
`;

export const Text = styled.p`
  margin-bottom: 23px;
`;

export const ListText = styled.p`
  margin-bottom: 20px;
  margin-top: 25px;
`;

export const List = styled.ul`
  margin-top: -15px;
  padding-left: 17px;
`;

export const Item = styled.li`
  line-height: 25px;
`;

export const ErrorMessage = styled.p`
  color: #e4655d;
  margin-bottom: 20px;
  display: ${({ errorDisplay }) => errorDisplay};
`;
