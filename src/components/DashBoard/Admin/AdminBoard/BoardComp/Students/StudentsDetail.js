import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StudentsDetail = () => {
  const studentUser = useSelector((state) => state.user);
  const { id } = useParams();

  const [studentDetailGet, setStudentDetailGet] = React.useState({});

  const getStudentDetail = async () => {
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/student/${id}`;
    console.log(studentUser._id);

    await axios.get(url).then((res) => {
      setStudentDetailGet(res.data.data);
      console.log(res.data.data);
    }, []);
  };

  React.useEffect(() => {
    getStudentDetail();
    console.log(studentDetailGet);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <h4>My Profile</h4>
          <DetailContainer>
            <DetailContainerWrapper>
              <h5>About Me</h5>
              <DetailContainerHold>
                <DetailImageContainer>
                  <img src="/teacher.jpg" alt="" />
                </DetailImageContainer>
                <DetailTextContainer>
                  <TeachersName> {studentDetailGet.fullName} </TeachersName>
                  <TeachersShortDetail>
                    {studentDetailGet.profile}
                  </TeachersShortDetail>

                  <TeacherCredentialsHold>
                    <TitleContent>
                      <Title>Name: </Title>
                      <Content>{studentDetailGet.fullName}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Gender:</Title>
                      <Content> {studentDetailGet.gender} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Father's Name:</Title>
                      <Content> {studentDetailGet.parentName1} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Mother's Name:</Title>
                      <Content> {studentDetailGet.parentName2} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Date Of Birth:</Title>
                      <Content> {studentDetailGet.DOB} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Religion:</Title>
                      <Content> {studentDetailGet.religion} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>E-mail:</Title>
                      <Content> {studentDetailGet.email} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Father's Occupation:</Title>
                      <Content> {studentDetailGet.FathersOccupation} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Class Room:</Title>
                      <Content> {studentDetailGet.nameOfClass} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Class Code:</Title>
                      <Content> {studentDetailGet.classCode} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>My Code:</Title>
                      <Content> {studentDetailGet.studentCode} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Home Address:</Title>
                      <Content> {studentDetailGet.Address} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Phone Number:</Title>
                      <Content> 0{studentDetailGet.parentPhone} </Content>
                    </TitleContent>
                  </TeacherCredentialsHold>
                </DetailTextContainer>
              </DetailContainerHold>
            </DetailContainerWrapper>
          </DetailContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default StudentsDetail;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
  font-family: poppins;

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

  button {
    height: 30px;
    width: 150px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DetailContainer = styled.div`
  background-color: #fff;
`;
const DetailContainerWrapper = styled.div`
  margin: 25px;
  h5 {
    padding-top: 20px;
  }
`;
const DetailContainerHold = styled.div`
  display: flex;
`;
const DetailImageContainer = styled.div`
  height: 230px;
  width: 200px;
  background-color: aqua;
  border-radius: 5px;
  margin-right: 60px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const DetailTextContainer = styled.div`
  width: 600px;
  /* background-color: red; */
`;
const TeachersName = styled.div`
  font-weight: 700;
  margin-bottom: 15px;
`;
const TeacherCredentialsHold = styled.div``;
const TeachersShortDetail = styled.div`
  font-size: 13px;
`;

const TitleContent = styled.div`
  display: flex;
  /* background-color: aqua; */
  font-size: 12px;
  margin: 20px 0;
`;
const Title = styled.div`
  margin-right: 3px;
  font-weight: 500;
  color: gray;
  width: 130px;
`;
const Content = styled.div``;
