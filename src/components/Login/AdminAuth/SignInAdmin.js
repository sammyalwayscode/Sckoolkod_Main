import React, { useState } from "react";
import styled from "styled-components";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../../ReduxGlobal/Global";

const SignInAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const yupSchema = yup.object().shape({
    email: yup.string().email().required("email has to be filled"),
    password: yup.string().required("Please enter your preferred password"),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    // const mainURL = "https://skulapp.herokuapp.com";
    const localURL = "http://localhost:2332";

    const url = `${localURL}/api/admin/signin`;

    await axios
      .post(url, val)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome back on board",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          dispatch(createUser(res.data.data));
          navigate("/");
        });
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  });

  return (
    <Container>
      <Wrapper>
        <Brand>
          <Logo to="/">
            <img src="/log.png" alt="" />
          </Logo>

          {/* <Text>
            Access to quantity Teachers and access to quantity Schools
          </Text>
          <Brief>
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide
            <br />
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide
          </Brief> */}
        </Brand>

        <Line />
        <MainCard onSubmit={onSubmit}>
          <LogoTitle1>Admin Sign In</LogoTitle1>
          <Name>
            <InputTitle>Email</InputTitle>
            <Input
              placeholder="e.g: peteroti@gmail.com"
              {...register("email")}
            />
          </Name>
          <Error>{errors?.email?.message}</Error>
          <Name>
            <InputTitle>Password</InputTitle>
            <Input
              placeholder="************"
              type="password"
              {...register("password")}
            />
          </Name>
          <Error>{errors?.password?.message}</Error>

          <Button type="submit">Continue</Button>
          <Error1>{error && error}</Error1>
          <Info>
            <SocialText>
              Don't Have an Account? <Span to="/register">Register</Span>
            </SocialText>
            <SocialText>
              <Span to="/password-reset">Forgot Pasword?</Span>
            </SocialText>
          </Info>

          {/* <Social>
            <SocialText>Use Social Media</SocialText>
            <Icons>
              <Icon />
              <Icon1 />
              <Icon2 />
              <Icon3 />
            </Icons>
          </Social> */}
        </MainCard>
      </Wrapper>
    </Container>
  );
};

export default SignInAdmin;

const Error1 = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 500;
`;

const PhoneData = styled.div`
  width: 100%;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 500;
`;

const Icon = styled(AiFillGoogleCircle)`
  font-size: 35px;
  color: red;
  :hover {
    cursor: pointer;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Span = styled(Link)`
  margin: 0 5px;
  color: #0b0742;
  font-weight: 700;
  text-decoration: none;
`;
const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
  font-size: 35px;
  color: #0077b7;
  :hover {
    cursor: pointer;
  }
`;

const Icon2 = styled(AiFillTwitterSquare)`
  font-size: 35px;
  color: #50abf1;
  :hover {
    cursor: pointer;
  }
`;

const Icon1 = styled(AiFillFacebook)`
  font-size: 35px;
  color: #475993;
  :hover {
    cursor: pointer;
  }
`;

const SocialText = styled.div`
  font-size: 12px;
  display: flex;
  margin-top: 0px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  outline: none;
  border: 0;
  font-family: Poppins;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #0b0742;
  height: 45px;
  width: 100%;
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;

const InputTitle = styled.div`
  font-size: 13px;
  position: absolute;
  top: -10px;
  left: 7px;
  padding: 0 3px;
  /* background-color: #f7eff1; */
  /* background-clip: content-box; */
  font-weight: 700;
  color: #0b0742;
`;

const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0;
  width: 100%;
  height: 100%;
  padding-left: 10px;

  ::placeholder {
    color: lightgray;
    font-family: Poppins;
    /* padding-left: 10px; */
  }
`;

const Hold = styled.div`
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  width: 100%;
  margin: 17px 0;
`;

const Phone1 = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-left: 5px;
`;

const Phone = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-right: 5px;
`;

const Name = styled.div`
  width: 96%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin: 10px 0;
  background-color: transparent;
`;

const MainCard = styled.form`
  width: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin-left: 40px;
  }
`;

const Line = styled.div`
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 50px;

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

const Brief = styled.div`
  margin-top: 20px;
  color: gray;
  font-size: 10px;
  text-align: center;

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

const Text = styled.div`
  font-weight: 700;
  margin-top: 25px;
  text-align: center;
  width: 300px;
  font-size: 25px;
  line-height: 1.2;
  color: #742e9d;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px 0;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1010px) {
    width: 90%;
  }
`;

const LogoTitle1 = styled.div`
  font-weight: 700;
  color: gray;
  margin-bottom: 50px;
  color: #0b0742;
  font-size: 30px;
  /* text-transform: uppercase; */
  font-family: Pacifico;

  @media screen and (max-width: 1010px) {
    margin-top: 20px;
  }
`;

const LogoTitle = styled.div`
  font-weight: 500;
  color: gray;
`;

const Bar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fffbf8;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  color: purple;
`;

const Brand = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f7eff1; */
`;
