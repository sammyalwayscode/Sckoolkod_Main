import React from "react";
import { BrowserRouter } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
import Login from "./components/Login/Login";
import { MainGlobal } from "./components/ContexGlobal/Global";

const App = () => {
  return (
    <MainGlobal>
      <BrowserRouter>
        <Landing />
        <Login />
      </BrowserRouter>
    </MainGlobal>
  );
};

export default App;
