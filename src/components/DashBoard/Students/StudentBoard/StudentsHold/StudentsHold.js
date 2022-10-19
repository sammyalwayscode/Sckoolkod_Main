import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const BoardHold = () => {
  return (
    <Container>
      <Header />
      <SideBar />
    </Container>
  );
};

export default BoardHold;

const Container = styled.div`
  display: flex;
  width: 100%;
  z-index: 100;
  position: absolute;
`;
