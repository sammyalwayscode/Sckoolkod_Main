import React from "react";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { IoQrCode } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsFillDisplayFill } from "react-icons/bs";
import { VscSymbolClass } from "react-icons/vsc";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";

const Overview = () => {
  const teacherUser = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <h3>Teacher's Dashboard</h3>
        <RowOne>
          <Boxes>
            <BoxOneIconHold bg="#FF0000">
              {" "}
              <FaSchool />{" "}
            </BoxOneIconHold>
            <span>
              School Name: <strong> {teacherUser.schoolName} </strong>{" "}
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#89087E">
              {" "}
              <MdAdminPanelSettings />{" "}
            </BoxOneIconHold>
            <span>
              Teacher's Name: <strong> {teacherUser.fullName} </strong>
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#1FAE04">
              {" "}
              <IoQrCode />{" "}
            </BoxOneIconHold>
            <span>
              School Code: <strong> {teacherUser.schoolCode} </strong>
            </span>
          </Boxes>
        </RowOne>
        <RowTwo>
          <FirstBox>
            <InnerBox>
              <IconHold bgi="#F3E5F5">
                <FaChalkboardTeacher color="#8E24AA" />
              </IconHold>
              <span> {teacherUser.teacherCode} </span>
              <small>Teacher Code</small>
            </InnerBox>
            <InnerBox>
              <IconHold bgi="#E1F1FF">
                <BsFillDisplayFill color="#3F7AFC" />
              </IconHold>
              <span> {teacherUser.displayName} </span>
              <small>Display Name</small>
            </InnerBox>
            <InnerBox>
              <IconHold bgi="#FFF2D8">
                <VscSymbolClass color="#FFA070" />
              </IconHold>
              <span> {teacherUser.class.length} </span>
              <small>Totla Classes</small>
            </InnerBox>
            <InnerBox>
              <IconHold bgi="#FFEAEA">
                <IoIosPeople color="#FF0000" />
              </IconHold>
              <span> {teacherUser.students.length} </span>
              <small>Total Students</small>
            </InnerBox>
          </FirstBox>
          <SecondBox>
            <DoughnutChart />
          </SecondBox>
          <ThirdBox>
            <PieChart />
          </ThirdBox>
        </RowTwo>
      </Wrapper>
    </Container>
  );
};

export default Overview;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f0f1f3;
  font-family: poppins;
  display: flex;
  justify-content: center;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  width: 1150px;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;

const RowOne = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Boxes = styled.div`
  height: 120px;
  width: 360px;
  background-color: #fff;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  @media (max-width: 770px) {
    width: 90%;
  }

  span {
    font-size: 15px;
  }
`;

const BoxOneIconHold = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const RowTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const FirstBox = styled.div`
  height: 350px;
  width: 360px;
  /* background-color: #fff; */
  margin: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* border-radius: 6px; */

  @media (max-width: 700px) {
    width: 90%;
    justify-content: center;
  }
`;
const SecondBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  margin: 10px 10px;
`;
const ThirdBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  margin: 10px 10px;
`;

const InnerBox = styled.div`
  height: 160px;
  width: 173px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
  }
  small {
    font-size: 11px;
  }

  @media (max-width: 700px) {
    width: 150px;
    margin: 10px;
  }
`;

const IconHold = styled.div`
  margin: 0 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ bgi }) => bgi};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
