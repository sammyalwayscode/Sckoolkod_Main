import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillDashboard,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
import { MdAccountTree, MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscCompassActive } from "react-icons/vsc";
import { HiPresentationChartBar } from "react-icons/hi";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../ReduxGlobal/Global";

const Desktop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <NavsCtrl>
          <MainNav
            to="/"
            // style={{ backgroundColor: " #ffa301" }}
          >
            <Nav>
              <IconHold
              // style={{ color: "#fff" }}
              >
                <AiFillDashboard />
              </IconHold>
              <span>Overviwe</span>
            </Nav>
          </MainNav>
          <MainNav to="/teachers">
            <Nav>
              <IconHold>
                <GiTeacher />
              </IconHold>
              <span>Teachers</span>
            </Nav>
          </MainNav>
          <MainNav to="/students">
            <Nav>
              <IconHold>
                <IoIosPeople />
              </IconHold>
              <span>Students</span>
            </Nav>
          </MainNav>
          <MainNav to="/parents">
            <Nav>
              <IconHold>
                <RiParentLine />
              </IconHold>
              <span>Parents</span>
            </Nav>
          </MainNav>
          {/* <MainNav to="/account">
            <Nav>
              <IconHold>
                <MdAccountTree />
              </IconHold>
              <span>Fees</span>
            </Nav>
          </MainNav> */}
          <MainNav to="/class">
            <Nav>
              <IconHold>
                <SiGoogleclassroom />
              </IconHold>
              <span>Class</span>
            </Nav>
          </MainNav>
          {/* <MainNav to="subject">
            <Nav>
              <IconHold>
                <MdSubject />
              </IconHold>
              <span>Subjects</span>
            </Nav>
          </MainNav> */}
          {/* <MainNav to="/routine">
            <Nav>
              <IconHold>
                <VscCompassActive />
              </IconHold>
              <span>Class Routine</span>
            </Nav>
          </MainNav> */}
          <MainNav to="/expenses">
            <Nav>
              <IconHold>
                <HiPresentationChartBar />
              </IconHold>
              <span>Expenses</span>
            </Nav>
          </MainNav>
          {/* <MainNav to="/events">
            <Nav>
              <IconHold>
                <BsCalendar2EventFill />
              </IconHold>
              <span>Events</span>
            </Nav>
          </MainNav> */}
          <MainNavOut>
            <Nav
              onClick={() => {
                dispatch(logOut());
                navigate("/");
              }}
            >
              <IconHold>
                <FaPowerOff />
              </IconHold>
              <span>Log Out</span>
            </Nav>
          </MainNavOut>
        </NavsCtrl>
      </Wrapper>
    </Container>
  );
};

export default Desktop;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: #031e3e;
  width: 180px;
  font-family: poppins;
  position: fixed;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div``;

const NavsCtrl = styled.div``;
const MainNav = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */
  cursor: pointer;

  &.active {
    background-color: #ffa301;
  }
`;

const MainNavOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */
  cursor: pointer;

  &.active {
    background-color: #ffa301;
  }
`;

const IconHold = styled.section`
  color: #ffa301;
  /* &.active {
    color: red;
  } */
`;

const Nav = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  span {
    font-size: x-small;
    font-weight: 400;
    margin-left: 5px;
    color: #fff;
  }
`;
