import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BoardHold from "../DashBoard/Admin/AdminBoard/BoardHold/BoardHold";
import Private from "../Restrict/Private";
import PrivateRoute from "../Restrict/PrivateRoute";
import RedirectSign from "./AdminAuth/RedirectSign";
import SignInAdmin from "./AdminAuth/SignInAdmin";
import SignUpAdmin from "./AdminAuth/SignUpAdmin";
import Auth from "./Auth/Auth";
import StudentAuth from "./StudentAuth/StudentAuth";
import SignInTeacher from "./TeacherAuth/SignInTeacher";
import SignUpTeacher from "./TeacherAuth/SignUpTeacher";
import TeachRedirectSign from "./TeacherAuth/TeachRedirectSign";

const Login = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        {!user ? (
          <>
            <Route path="/signupadmin" element={<SignUpAdmin />} />
            <Route path="/adminsignin" element={<SignInAdmin />} />
            <Route path="/teachersignup" element={<SignUpTeacher />} />
            <Route path="/signinteacher" element={<SignInTeacher />} />
            <Route path="/signstudents" element={<StudentAuth />} />
            <Route path="/api/admin/:id/:token" element={<RedirectSign />} />
            <Route
              path="/api/teacher/:id/:token"
              element={<TeachRedirectSign />}
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Auth />
                </PrivateRoute>
              }
            />
            <Route
              path="/adminscreen"
              element={
                <Private>
                  <BoardHold />
                </Private>
              }
            />
          </>
        ) : (
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Auth />
              </PrivateRoute>
            }
          />
        )}
      </Routes>
    </>
  );
};

export default Login;
