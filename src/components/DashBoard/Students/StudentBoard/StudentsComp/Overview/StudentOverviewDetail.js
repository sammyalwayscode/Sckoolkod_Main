import axios from "axios";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GlobalState } from "../../../../../ContexGlobal/Global";

const StudentOverviewDetail = () => {
  const studentUser = useSelector((state) => state.user);
  const { updateStudentModal } = useContext(GlobalState);
  // const { id } = useParams();

  const [studentDetailGet, setStudentDetailGet] = React.useState({});

  const getTeachers = async () => {
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/student/${studentUser._id}`;
    console.log(studentUser._id);

    await axios.get(url).then((res) => {
      setStudentDetailGet(res.data.data);
      console.log(res.data.data);
    }, []);
  };

  React.useEffect(() => {
    getTeachers();
    console.log(studentDetailGet);
  }, []);
  return (
    <DetailRow>
      <DetailRowHold>
        <h4>About Me</h4>
        <AvatarNameHold>
          <Avatar>
            <img src="/ava.png" alt="" />
          </Avatar>
          <NameDetailHold>
            <Named>{studentDetailGet.fullName}</Named>
            <Detail>{studentDetailGet.profile}</Detail>
          </NameDetailHold>
        </AvatarNameHold>
        <TitleContentMain>
          <TitleContent>
            <Title>Name:</Title>
            <Content>{studentDetailGet.fullName}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Gender:</Title>
            <Content>{studentDetailGet.gender} </Content>
          </TitleContent>
          <TitleContent>
            <Title>Father's Name:</Title>
            <Content>{studentDetailGet.parentName1}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Mother's Name:</Title>
            <Content>{studentDetailGet.parentName2}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Date Of Birth:</Title>
            <Content>{studentDetailGet.DOB}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Religion:</Title>
            <Content>{studentDetailGet.religion}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Father's Occupation:</Title>
            <Content>{studentDetailGet.FathersOccupation}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Email:</Title>
            <Content>{studentDetailGet.email} </Content>
          </TitleContent>
          <TitleContent>
            <Title>Class:</Title>
            <Content>{studentDetailGet.nameOfClass}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Address:</Title>
            <Content>{studentDetailGet.Address}</Content>
          </TitleContent>
          <TitleContent>
            <Title>Parent Phone No:</Title>
            <Content>0{studentDetailGet.parentPhone}</Content>
          </TitleContent>
        </TitleContentMain>
      </DetailRowHold>
    </DetailRow>
  );
};

export default StudentOverviewDetail;

const DetailRow = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
const DetailRowHold = styled.div`
  width: 100%;
`;
const AvatarNameHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Avatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: darkcyan;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const NameDetailHold = styled.div`
  width: 220px;
`;
const Named = styled.div`
  font-weight: 700;
`;
const Detail = styled.div`
  font-size: 10px;
  color: gray;
`;
const TitleContentMain = styled.div``;
const TitleContent = styled.div`
  display: flex;
  /* background-color: aqua; */
  font-size: 11px;
  margin: 12px 0;
`;
const Title = styled.div`
  margin-right: 3px;
  font-weight: 500;
  color: gray;
  width: 130px;
`;
const Content = styled.div``;
