import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Account from "../TeachersComp/Account/Account";
import AddClass from "../TeachersComp/AddClass/AddClass";
import Class from "../TeachersComp/Class/Class";
import EachClass from "../TeachersComp/Class/EachClass";
import Events from "../TeachersComp/Events/Events";
import Overview from "../TeachersComp/Overview/Overview";
import Parents from "../TeachersComp/Parents/Parents";
import ClassForSubjects from "../TeachersComp/Performance/ClassForSubjects";
import StudentsForPerformance from "../TeachersComp/Performance/StudentsForPerformance";
import SubjectsForPerformance from "../TeachersComp/Performance/SubjectsForPerformance";
import Students from "../TeachersComp/Students/Students";
import ClassForSubject from "../TeachersComp/Subject/ClassForSubject";
import Subject from "../TeachersComp/Subject/Subject";
import TeacherProfileUpdate from "../TeachersComp/TeacherProfileUpdate/TeacherProfileUpdate";
import TeacherDetail from "../TeachersComp/Teahers/TeacherDetail";
import Teachers from "../TeachersComp/Teahers/Teachers";
import TeachersHold from "../TeachersHold/TeachersHold";

const BoardRoute = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user?.status === "teacher" ? (
        <Container>
          <TeachersHold />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/account" element={<Account />} />
            <Route path="/allclass" element={<Class />} />
            <Route path="/classadd" element={<AddClass />} />
            <Route path="/classsubject" element={<ClassForSubject />} />
            <Route path="/class/subject/:classID" element={<Subject />} />
            <Route path="/performanceclass" element={<ClassForSubjects />} />
            <Route
              path="/performanceclass/performancesubject/:classID"
              element={<SubjectsForPerformance />}
            />
            <Route
              path="/performanceclass/performancesubject/students/:subjectID"
              element={<StudentsForPerformance />}
            />
            <Route path="/myprofile" element={<TeacherProfileUpdate />} />
            <Route path="/events" element={<Events />} />
            <Route path="/allclass/:classID" element={<EachClass />} />
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
