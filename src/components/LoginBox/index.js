import React, { useState } from "react";
import moment from "moment";
import { questions } from "../../questions";
import { useHistory } from "react-router";
import Axios from "axios";
import {
  Login,
  LoginContainer,
  LoginButton,
  LoginButtons,
  LoginWrapper,
  LoginReg,
  Header,
  SubHeader,
  Form,
  Input,
  ForgotPassword,
  Register,
  ListText,
  Text,
  RegButton,
  List,
  Item,
  ErrorMessage,
} from "./LoginBoxComponents";
import { useGlobalContext } from "../../context";

const LoginBox = () => {
  const { getResults, checkAnswer, getPosts, setIsLoading } =
    useGlobalContext();
  const history = useHistory();
  const navigateTo = () => {
    setIsLoading(false);
    history.push("/dashboard");
  };

  const [errorDisplay, setErrorDisplay] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let email = e.target.email.value.trim();
    let password = e.target.password.value;

    Axios.post("https://sharescape-mysql.herokuapp.com/login", {
      email: email,
      password: password,
    }).then((res) => {
      if (res.data.message) {
        setErrorDisplay("block");
      } else {
        setErrorDisplay("none");
        let result = res.data[0];
        localStorage.clear();
        localStorage.setItem("userId", result.id);
        localStorage.setItem("name", result.full_name);
        localStorage.setItem("email", result.email);
        localStorage.setItem("profilePic", result.profile_pic);
        localStorage.setItem("coverPhoto", result.cover_photo);
        localStorage.setItem("followers", result.followers);
        localStorage.setItem("following", result.following);

        Axios.get(
          "https://sharescape-mysql.herokuapp.com/getMostRecentQuestion"
        ).then((res) => {
          let currentDate = moment().format("YYYY-MM-DD");
          let diff = 0;
          if (res.data.length > 0) {
            let date = res.data[0].date_posted;
            diff = moment().diff(date, "hours");
            let question = res.data[0].question;
            localStorage.setItem("question", question);
          }

          if (res.data.length < 1 || diff >= 24) {
            let question =
              questions[Math.floor(Math.random() * questions.length)];
            localStorage.setItem("question", question);
            Axios.post(
              "https://sharescape-mysql.herokuapp.com/submitQuestion",
              {
                date: currentDate,
                question: question,
              }
            );
          }
        });
        getPosts();
        getResults();
        checkAnswer();
        navigateTo();
      }
    });
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <Header>Please log in to continue</Header>
          <LoginReg>
            <Login>
              <SubHeader>Log in</SubHeader>
              <Form onSubmit={handleSubmit}>
                <Input name="email" placeholder="Email address" />
                <Input name="password" placeholder="Password" type="password" />
                <ErrorMessage errorDisplay={errorDisplay}>
                  Incorrect email & password combination
                </ErrorMessage>
                <LoginButtons>
                  <LoginButton type="submit">Log in</LoginButton>
                  <ForgotPassword>Forgot your password?</ForgotPassword>
                </LoginButtons>
              </Form>
            </Login>
            <Register>
              <SubHeader>Create your account</SubHeader>
              <Text>It's easy, free, and only takes a moment.</Text>
              <RegButton to="/register">Create your account</RegButton>
              <ListText>Sharescape is a social media site.</ListText>
              <List>
                <Item>Share your thoughts and experiences</Item>
                <Item>Interact with your followers</Item>
                <Item>Customise your profile</Item>
                <Item>Your data is safe & confidential</Item>
              </List>
            </Register>
          </LoginReg>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default LoginBox;
