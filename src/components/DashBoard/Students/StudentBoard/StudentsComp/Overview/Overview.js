import React from "react";
import { FaSchool } from "react-icons/fa";
import { SiGoogleclassroom, SiSololearn } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { useSelector } from "react-redux";
import styled from "styled-components";
import StudentOverviewDetail from "./StudentOverviewDetail";
import { IoIosPeople } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
import StudentOverviewTable from "./StudentOverviewTable";

const Overview = () => {
  const studentUser = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <h4> Welcome {studentUser.fullName} </h4>
        <RowOne>
          <Boxes>
            <BoxOneIconHold bg="#FF0000">
              {" "}
              <FaSchool />{" "}
            </BoxOneIconHold>
            <span>
              School Name: <strong> {studentUser.schoolName} </strong>{" "}
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#89087E">
              {" "}
              <MdAdminPanelSettings />{" "}
            </BoxOneIconHold>
            <span>
              Student's Name: <strong> {studentUser.fullName} </strong>
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#1FAE04">
              {" "}
              <SiGoogleclassroom />{" "}
            </BoxOneIconHold>
            <span>
              Class Room: <strong> {studentUser.nameOfClass} </strong>
            </span>
          </Boxes>
        </RowOne>
        <RowTwo>
          <ColoumOne>
            <StudentOverviewDetail />
          </ColoumOne>
          <ColoumTwo>
            <TopTwoRow>
              <RowTwoDetail>
                <BoxTwo>
                  <IconHold bgi="#D1F3E0">
                    <IoIosPeople color="#46BA93" />
                  </IconHold>
                  <TeacNum>
                    <Txt>Students</Txt>
                    <Num>15,000</Num>
                  </TeacNum>
                </BoxTwo>
                <BoxTwo>
                  <IconHold bgi="#E1F1FF">
                    <GiTeacher color="#3F7AFC" />
                  </IconHold>
                  <TeacNum>
                    <Txt>Teachers</Txt>
                    <Num>7,832</Num>
                  </TeacNum>
                </BoxTwo>
                <BoxTwo>
                  <IconHold bgi="#FFF2D8">
                    <RiParentFill color="#FFA12D" />
                  </IconHold>
                  <TeacNum>
                    <Txt>Parents</Txt>
                    <Num>15,000</Num>
                  </TeacNum>
                </BoxTwo>
              </RowTwoDetail>
            </TopTwoRow>
            <BottomTwoRow>
              <StudentOverviewTable />
            </BottomTwoRow>
          </ColoumTwo>
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
  /* flex-wrap: wrap; */

  @media (max-width: 770px) {
    display: block;
  }
`;
const ColoumOne = styled.div`
  width: 375px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  border-radius: 6px;

  @media (max-width: 770px) {
    width: 90%;
  }
`;
const ColoumTwo = styled.div`
  /* margin: 0 10px; */
  flex: 1;
`;

const TopTwoRow = styled.div`
  /* background-color: aliceblue; */
  margin-bottom: 10px;
`;

const RowTwoDetail = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }

  /* @media (max-width: 500px) {
    width: 90%;
  } */
`;
const BoxTwo = styled.div`
  height: 90px;
  width: 240px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin: 10px 10px;
  }
  @media (max-width: 500px) {
    width: 90%;
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
`;
const TeacNum = styled.div`
  margin: 0 10px;
`;
const Txt = styled.small``;
const Num = styled.div`
  font-weight: 600;
`;

const BottomTwoRow = styled.div`
  @media (max-width: 770px) {
    display: flex;
    justify-content: center;
  }
`;
