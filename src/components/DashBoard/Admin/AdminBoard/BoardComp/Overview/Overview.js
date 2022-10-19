import React from "react";
import { FaSchool } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoQrCode } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import styled from "styled-components";
import StaticDatePicker from "./StaticDatePicker ";
import { SiSololearn } from "react-icons/si";
import { useSelector } from "react-redux";
import DoughnutChart from "./DoughnutChart";
import AreaChart from "./AreaChart";

const Overview = () => {
  const adminUser = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <h3>Admin's Dashboard</h3>
        <RowOne>
          <Boxes>
            <BoxOneIconHold bg="#FF0000">
              {" "}
              <FaSchool />{" "}
            </BoxOneIconHold>
            <span>
              School Name: <strong> {adminUser.schoolName} </strong>{" "}
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#89087E">
              {" "}
              <MdAdminPanelSettings />{" "}
            </BoxOneIconHold>
            <span>
              Admin's Name: <strong> {adminUser.fullName} </strong>
            </span>
          </Boxes>
          <Boxes>
            <BoxOneIconHold bg="#1FAE04">
              {" "}
              <IoQrCode />{" "}
            </BoxOneIconHold>
            <span>
              School Code: <strong> {adminUser.code} </strong>
            </span>
          </Boxes>
        </RowOne>
        <RowTwo>
          <span>
            <BoxTwo>
              <IconHold bgi="#D1F3E0">
                <IoIosPeople color="#46BA93" />
              </IconHold>
              <TeacNum>
                <Txt>Students</Txt>
                <Num> {adminUser.students.length} </Num>
              </TeacNum>
            </BoxTwo>
            <BoxTwo>
              <IconHold bgi="#E1F1FF">
                <GiTeacher color="#3F7AFC" />
              </IconHold>
              <TeacNum>
                <Txt>Teachers</Txt>
                <Num>{adminUser.teacher.length}</Num>
              </TeacNum>
            </BoxTwo>
          </span>
          <span>
            <BoxTwo>
              <IconHold bgi="#FFF2D8">
                <RiParentFill color="#FFA12D" />
              </IconHold>
              <TeacNum>
                <Txt>Parents</Txt>
                <Num>{adminUser.students.length} </Num>
              </TeacNum>
            </BoxTwo>
            <BoxTwo>
              <IconHold bgi="#FFEAEA">
                <SiSololearn color="#FF0062" />
              </IconHold>
              <TeacNum>
                <Txt>Earnings</Txt>
                <Num>$231,726</Num>
              </TeacNum>
            </BoxTwo>
          </span>
        </RowTwo>
        <RowThree>
          {/* <ChartOne>
            <StaticDatePicker />
          </ChartOne> */}
          <ChartTwo>
            <DoughnutChart />
          </ChartTwo>
          <ChartThree>
            <AreaChart />
          </ChartThree>
        </RowThree>
      </Wrapper>
    </Container>
  );
};

export default Overview;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
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
  text-align: center;

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
  justify-content: center;
  flex-wrap: wrap;
  span {
    display: flex;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    span {
      flex-direction: column;
    }
  }
`;
const BoxTwo = styled.div`
  height: 90px;
  width: 265px;
  background-color: #fff;
  margin: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  @media (max-width: 500px) {
    width: 300px;
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
  text-align: center;
`;
const TeacNum = styled.div`
  margin: 0 10px;
`;
const Txt = styled.small``;
const Num = styled.div`
  font-weight: 600;
`;
const RowThree = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ChartOne = styled.div`
  /* width: 360px; */
  /* height: 350px; */
  /* background-color: darkorange; */
  margin: 10px 10px;
  /* overflow: hidden; */
`;
const ChartTwo = styled.div`
  width: 360px;
  height: 400px;
  background-color: #fff;
  margin: 10px 10px;
`;
const ChartThree = styled.div`
  /* width: 360px; */
  flex: 1;
  flex-wrap: wrap;
  height: 400px;
  background-color: #fff;
  margin: 10px 10px;
  @media (max-width: 600px) {
    display: flex;
    width: 90%;
    height: 200px;
    justify-content: center;
    align-items: center;
  }
`;
