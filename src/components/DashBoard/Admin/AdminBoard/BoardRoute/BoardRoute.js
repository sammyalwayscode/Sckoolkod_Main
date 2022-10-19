import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Account from "../BoardComp/Account/Account";
import Class from "../BoardComp/Class/Class";
import ClassDetail from "../BoardComp/Class/ClassDetail";
import Events from "../BoardComp/Events/Events";
import Expenses from "../BoardComp/Expenses/Expenses";
import Overview from "../BoardComp/Overview/Overview";
import Parents from "../BoardComp/Parents/Parents";
import Routine from "../BoardComp/Routine/Routine";
import Students from "../BoardComp/Students/Students";
import StudentsDetail from "../BoardComp/Students/StudentsDetail";
import Subject from "../BoardComp/Subject/Subject";
import TeacherDetail from "../BoardComp/Teahers/TeacherDetail";
import Teachers from "../BoardComp/Teahers/Teachers";
import BoardHold from "../BoardHold/BoardHold";

const BoardRoute = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user?.status === "admin" ? (
        <Container>
          <BoardHold />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/account" element={<Account />} />
            <Route path="/class" element={<Class />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/students/:id" element={<StudentsDetail />} />
            <Route path="/class/:teacherID" element={<ClassDetail />} />
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
