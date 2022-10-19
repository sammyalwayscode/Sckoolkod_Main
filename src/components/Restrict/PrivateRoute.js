import React from "react";
import { useSelector } from "react-redux";
import decoder from "jwt-decode";
// import StudentScreen from "../HomeComp/Student/StudentScreen";
// import TeacherEndpoint from "../HomeComp/Teacher/TeacherEndpoint";
import Auth from "../Login/Auth/Auth";
import BoardRoute from "../DashBoard/Admin/AdminBoard/BoardRoute/BoardRoute";
import TeachersRoute from "../DashBoard/Teachers/TeachersBoard/TeachersRoute/TeachersRoute";
import StudentsRoute from "../DashBoard/Students/StudentBoard/StudentsRoute/StudentsRoute";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (user) {
    const token = decoder(user?.token);
    if (token) {
      return token?.status === "admin" ? (
        <BoardRoute />
      ) : token?.status === "teacher" ? (
        <TeachersRoute />
      ) : token?.status === "student" ? (
        <StudentsRoute />
      ) : null;
    }
  }

  return <Auth />;
};

export default PrivateRoute;
