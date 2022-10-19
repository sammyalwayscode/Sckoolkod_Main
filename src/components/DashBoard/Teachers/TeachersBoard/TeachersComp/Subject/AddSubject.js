import React from "react";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddSubject = () => {
  const { classID } = useParams();
  console.log(classID);

  const yupSchema = yup.object().shape({
    subjectName: yup.string().required("subjectName profile has to be filled"),
    subjectTeacher: yup
      .string()
      .required("subjectTeacher profile has to be filled"),
    subjectType: yup.string().required("subjectType profile has to be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/subject/${classID}`;

    await axios.post(url, val);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Subject Added ✅",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      console.log(val);
    });
  });
  return (
    <AddSubBoard>
      <h4>Add A New Subject</h4>
      <InPutBtnHold onSubmit={onSubmit}>
        <div>
          <small>Name Of Subject</small>
          <input
            placeholder="What's the name of your new Subject"
            {...register("subjectName")}
          />
          <Error>{errors?.subjectName?.message}</Error>
        </div>
        <div>
          <small>Subject Techer</small>
          <input
            placeholder="The Subject Teacher"
            {...register("subjectTeacher")}
          />
          <Error>{errors?.fullName?.subjectTeacher}</Error>
        </div>
        <div>
          <small>Subject Type</small>
          <input
            placeholder="What Categeory dose it falls In"
            {...register("subjectType")}
          />
          <Error>{errors?.subjectType?.message}</Error>
        </div>
        <button type="submit">Add Subject</button>
      </InPutBtnHold>
    </AddSubBoard>
  );
};

export default AddSubject;

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

  button {
    height: 35px;
    width: 120px;
    border: 0;
    outline: none;
    /* background-color: #ffa301; */
    background-color: #031e3e;
    color: #fff;
    font-family: poppins;
    font-weight: 700;
    margin: 0 8px;
    border-radius: 4px;
    cursor: pointer;
  }
  small {
    font-weight: 600;
    font-size: 12px;
  }
  div {
    margin: 0 10px;
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

const AddSubBoard = styled.div`
  height: 400px;
  width: 300px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h4 {
    margin-left: 10px;
  }
`;
