import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalState } from "../../../../../ContexGlobal/Global";

import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";

const AddStudentModal = () => {
  const { addStuModal, stuModalSwitch } = useContext(GlobalState);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const id = user._id;

  const yupSchema = yup.object().shape({
    teacherCode: yup.string().required("teachercode profile has to be filled"),
    fullName: yup.string().required("fullName profile has to be filled"),
    classCode: yup.string().required("classCode profile has to be filled"),
    gender: yup.string().required("gender profile has to be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    // const { expenseAmount, itemName, itemQuantity, sourcePurchase } = val;
    const localURL = "http://localhost:2332";
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const url = `${localURL}/api/student/register/${user.admin}/${user._id}`;

    await axios.post(url, val);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Students Created ✅",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      console.log(val);
    });
  });

  return (
    <div>
      {addStuModal ? (
        <Overlay onClick={stuModalSwitch}>
          <ModalContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2>Add A New Student</h2>
            <InPutBtnHold onSubmit={onSubmit}>
              <div>
                <input
                  placeholder="What's the name of your new Student?"
                  {...register("fullName")}
                />
                <Error>{errors?.fullName?.message}</Error>
              </div>
              <div>
                <select {...register("gender")}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
                <Error>{errors?.gender?.message}</Error>
              </div>
              <div>
                <input placeholder="Class Code?" {...register("classCode")} />
                <Error>{errors?.classCode?.message}</Error>
              </div>
              <div>
                <input
                  placeholder="Teachers Code?"
                  {...register("teacherCode")}
                />
                <Error>{errors?.teacherCode?.message}</Error>
              </div>
              <button type="submit">Create Student</button>
            </InPutBtnHold>
          </ModalContainer>
        </Overlay>
      ) : null}
    </div>
  );
};

export default AddStudentModal;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  font-family: poppins;
  z-index: 600;
`;
const ModalContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 350px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InPutBtnHold = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    height: 35px;
    width: 270px;
    font-family: poppins;
    margin-bottom: 15px;
  }

  select {
    height: 35px;
    width: 270px;
    font-family: poppins;
    margin-bottom: 15px;
  }

  button {
    height: 35px;
    width: 130px;
    background-color: #031e3e;
    font-family: poppins;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 500;
`;
