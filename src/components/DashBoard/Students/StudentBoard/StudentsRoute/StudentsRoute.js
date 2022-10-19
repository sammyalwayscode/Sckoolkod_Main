import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Account from "../StudentsComp/Account/Account";
import Class from "../StudentsComp/Class/Class";
import Events from "../StudentsComp/Events/Events";
import MyProfile from "../StudentsComp/MyProfile/MyProfile";
import Overview from "../StudentsComp/Overview/Overview";
import Parents from "../StudentsComp/Parents/Parents";
import Routine from "../StudentsComp/Routine/Routine";
import Students from "../StudentsComp/Students/Students";
import Subject from "../StudentsComp/Subject/Subject";
import Teachers from "../StudentsComp/Teahers/Teachers";
import StudentsHold from "../StudentsHold/StudentsHold";

const BoardRoute = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user?.status === "student" ? (
        <Container>
          <StudentsHold />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/account" element={<Account />} />
            <Route path="/class" element={<Class />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Container>
      ) : null}
    </>
  );
};

export default BoardRoute;

const Container = styled.div`
  display: flex;
  /* background-color: red; */
`;
