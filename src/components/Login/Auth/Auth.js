import React from "react";
import styled from "styled-components";
import perfect from "../image/perfect.png";
import student from "../image/student.png";
import school from "../image/adds.png";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <Container>
      <Wrapper>
        <Brand>
          <Logo>
            <img src="/log.png" alt="" />
          </Logo>

          {/* <Text>
            Access to quantity Teachers and access to quantity Schools
          </Text>
          <Brief wid>
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide
            <br />
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide
          </Brief> */}
        </Brand>

        <Line />
        <MainCard>
          <LogoTitle1>
            {/* <Brief>
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide
            </Brief> */}
          </LogoTitle1>

          <HolderData bg="#0b0742" to="/signupadmin">
            <Content>
              <TextContext>Login as School Admin</TextContext>
              <TextDetail>
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide
              </TextDetail>
            </Content>
            {/* <Image src={school} alt="school" /> */}
          </HolderData>

          <HolderData bg="#120c6e" to="/teachersignup">
            <Content>
              <TextContext>Login as Teacher</TextContext>
              <TextDetail>
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide
              </TextDetail>
            </Content>
            {/* <Image src={perfect} alt="perfect" /> */}
          </HolderData>

          <HolderData bg="#5e72eb" to="/signstudents">
            <Content>
              <TextContext>Login as Student/Parent</TextContext>
              <TextDetail>
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide
              </TextDetail>
            </Content>
            {/* <Image src={student} alt="student" /> */}
          </HolderData>

          {/* <Button>Continue</Button> */}
          <Info>
            <SocialText>
              {/* Don't Have an Account? <Span to="/">Register</Span> */}
            </SocialText>
            <SocialText>{/* <Span to="/">Forgot Pasword?</Span> */}</SocialText>
          </Info>

          {/* <Social>
            <SocialText>Use Social Media</SocialText>
            <Icons>
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

export default Auth;

const TextContext = styled.div`
  font-weight: 700;
  font-size: 23px;
  margin-bottom: 10px;
`;

const TextDetail = styled.div`
  font-size: 11px;
  width: 250px;
`;

const Content = styled.div`
  padding-left: 20px;
  color: white;
  line-height: 1.2;
`;

const Image = styled.img`
  /* width: 40px; */
  height: 230%;
  object-fit: fill;

  @media screen and (max-width: 425px) {
    /* width: 95%; */
    height: 190%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -100px;
  }
`;

const HolderData = styled(Link)`
  text-decoration: none;
  margin: 10px 0;
  width: 100%;
  height: 120px;
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }

  @media screen and (max-width: 425px) {
    width: 100%;

    display: flex;
    /* flex-direction: column; */
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const MainCard = styled.div`
  width: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Line = styled.div`
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 0px;

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

const Brief = styled.div`
  width: ${({ wid }) => (wid ? "100%" : "70%")};
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
  color: #031e3e;
  font-family: poppins;

  @media screen and (max-width: 1010px) {
    margin-top: 5px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin: 40px 0; */

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
  color: #742e9d;
  font-size: 30px;
  text-transform: ${({ wid }) => (wid ? "uppercase" : "normal")};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoTitle = styled.div`
  font-weight: 500;
  color: gray;
`;

const Bar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 10px;
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
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }

  @media screen and (max-width: 425px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
