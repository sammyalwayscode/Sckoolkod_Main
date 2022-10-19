import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Class = () => {
  const adminUser = useSelector((state) => state.user);
  const [allTeachers, setAllTeachers] = React.useState([]);

  const getTeachers = async () => {
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/admin/${adminUser._id}/teachers/get`;

    await axios.get(url).then((res) => {
      setAllTeachers(res.data.data.teacher);
      console.log(res.data.data.teacher);
    }, []);
  };

  React.useEffect(() => {
    getTeachers();
    console.log(allTeachers);
  }, []);
  return (
    <Container>
      <Wrapper>
        <h3>All Class</h3>
        <ClassesHold>
          {allTeachers?.map((props) => (
            <ClassCard to={`/class/${props._id}`} key={props._id}>
              <strong>
                {" "}
                <i>Display Name:</i> {props.displayName}{" "}
              </strong>
              <span> {props.fullName} </span>

              <small> {props.class.length} Classes</small>
            </ClassCard>
          ))}
        </ClassesHold>
      </Wrapper>
    </Container>
  );
};

export default Class;

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
