import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IoLogoBitbucket, IoNotifications, IoSearch } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { GlobalState } from "../../../ContexGlobal/Global";
import AddClassModal from "../TeachersBoard/TeachersComp/AddClassModal/AddClassModal";

const Header = () => {
  const { mobHandler, modalSwitch } = useContext(GlobalState);

  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <IoLogoBitbucket />
          </Logo>
          <Navs>
            <strong>Teachers</strong>
            <SearchBar>
              <SearchIcon />
              <input placeholder="Make a Search..." />
            </SearchBar>
            <Icons>
              <SiMinutemailer />
            </Icons>
            <Icons>
              <IoNotifications />
            </Icons>
            <AddBtn onClick={modalSwitch}>Add Class</AddBtn>
            <Avatar>
              <img src="/ava.png" alt="" />
            </Avatar>
          </Navs>
          <MobNav>
            <AvatarMob>
              <img src="/ava.png" alt="" />
            </AvatarMob>
            <Bugger onClick={mobHandler}>
              <HiMenuAlt1 />
            </Bugger>
          </MobNav>
        </Wrapper>
      </Container>
      <AddClassModal />
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: darkgoldenrod; */
  backdrop-filter: blur(10px);
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Wrapper = styled.div`
  width: 1300px;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    width: 90%;
  }
`;
const Logo = styled.div`
  font-size: 25px;
`;
const Navs = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
`;
const SearchBar = styled.div`
  height: 30px;
  width: 250px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  input {
    height: 25px;
    width: 85%;
    font-family: poppins;
    outline: none;
    border: 0;
    background-color: transparent;
  }
`;
const SearchIcon = styled(IoSearch)`
  font-size: 20px;
`;
const Icons = styled.div`
  height: 30px;
  width: 30px;
  background-color: #efefef;
  border-radius: 100px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const AddBtn = styled.button`
  height: 30px;
  width: 110px;
  border: 0;
  outline: none;
  /* background-color: #ffa301; */
  background-color: #031e3e;
  color: #fff;
  font-family: poppins;
  font-weight: 700;
  margin: 0 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const Avatar = styled.div`
  height: 35px;
  width: 35px;
  background-color: green;
  border-radius: 100px;
  border: 1px solid silver;
  margin-left: 10px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 100px;
    object-fit: cover;
  }
`;

const MobNav = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    display: flex;
    align-items: center;
  }
`;
const Bugger = styled.div`
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const AvatarMob = styled.div`
  height: 28px;
  width: 28px;
  background-color: green;
  border-radius: 100px;
  border: 1px solid silver;
  margin-left: 10px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 100px;
    object-fit: cover;
  }
`;
