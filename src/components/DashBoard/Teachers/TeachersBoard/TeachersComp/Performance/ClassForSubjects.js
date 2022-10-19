import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ClassForSubjects = () => {
  const [classes, setclasses] = useState([]);
  const user = useSelector((state) => state.user);

  // console.log(user._id);

  const getClasses = async () => {
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/class/${user._id}/`;

    await axios.get(url).then((res) => {
      setclasses(res.data.data.class);
      console.log(res.data.data.class);
    }, []);
  };

  useEffect(() => {
    getClasses();
    console.log(classes);
  }, []);
  return (
    <Container>
      <Wrapper>
        <h3>All Class</h3>
        <ClassesHold>
          {classes?.map((props) => (
            <ClassCard
              to={`/performanceclass/performancesubject/${props._id}`}
              key={props._id}
            >
              <strong>
                {" "}
                <i>Class Code:</i> {props.classCode}{" "}
              </strong>
              <span> {props.className} </span>
              <small>
                {" "}
                {props.subject.length} Subject Offered in this Class
              </small>
            </ClassCard>
          ))}
        </ClassesHold>
      </Wrapper>
    </Container>
  );
};

export default ClassForSubjects;

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
  z-index: 200;

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

const ClassesHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ClassCard = styled(NavLink)`
  text-decoration: none;
  height: 200px;
  width: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin: 8px;
  :hover {
    cursor: pointer;
  }
  span {
    font-size: 22px;
    font-weight: 800;
    color: #000;
  }

  small {
    color: #000;
  }

  strong {
    margin-bottom: 20px;
    color: #000;
  }
`;
