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

const UpdateModal = () => {
  const { teachModalSwitch, editTeacherPrifileModal } = useContext(GlobalState);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const id = user._id;

  const yupSchema = yup.object().shape({
    gender: yup.string().required("Gender profile has to be filled"),
    fullName: yup.string().required("fullName profile has to be filled"),
    profile: yup.string().min(30).required("Prifile profile has to be filled"),
    phoneNumber: yup.string().required("Phone Number profile has to be filled"),
    displayName: yup.string().required("Display Name profile has to be filled"),
    subject: yup.string().required("Subject profile has to be filled"),
    religion: yup.string().required("Religion profile has to be filled"),
    address: yup.string().required("Address profile has to be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    // const {
    //   gender,
    //   profile,
    //   fullName,
    //   phoneNumber,
    //   displayName,
    //   subject,
    //   religion,
    //   address,
    // } = val;
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/teacher/${user._id}`;

    await axios
      .patch(url, val)
      .then((res) => {
        console.log("Edited", res);
      })
      .catch(() => {
        console.log("Couldn't Edit");
      });

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
      {editTeacherPrifileModal ? (
        <Overlay onClick={teachModalSwitch}>
          <ModalContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <InPutBtnHold onSubmit={onSubmit}>
              <h3>Update Your Profile</h3>
              <textarea
                placeholder="Tell Us a Little About Yourself"
                {...register("profile")}
              />
              <Error>{errors?.profile?.message}</Error>
              <InputWrap>
                <WrapMain>
                  <InputHold>
                    <Label>Full Name</Label>
                    <input
                      placeholder="ENter Your Name"
                      {...register("fullName")}
                    />
                    <Error>{errors?.fullName?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Gender</Label>
                    <input placeholder="Gender" {...register("gender")} />
                    <Error>{errors?.gender?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Display Name</Label>
                    <input
                      placeholder="Display Name"
                      {...register("displayName")}
                    />
                    <Error>{errors?.displayName?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Religion</Label>
                    <input placeholder="Religion" {...register("religion")} />
                    <Error>{errors?.religion?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Email</Label>
                    <input disabled placeholder="Your Email" />
                  </InputHold>
                </WrapMain>
                <WrapMain>
                  <InputHold>
                    <Label>Subject</Label>
                    <input placeholder="Subject" {...register("subject")} />
                    <Error>{errors?.subject?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>No Of Classes</Label>
                    <input disabled placeholder="5" />
                  </InputHold>
                  <InputHold>
                    <Label>Teacher Code</Label>
                    <input disabled placeholder="fa63199f8f" />
                  </InputHold>
                  <InputHold>
                    <Label>Home Address</Label>
                    <input
                      placeholder="Home Address"
                      {...register("address")}
                    />
                    <Error>{errors?.address?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Phone Number</Label>
                    <input
                      placeholder="Phone Number"
                      {...register("phoneNumber")}
                    />
                    <Error>{errors?.phoneNumber?.message}</Error>
                  </InputHold>
                </WrapMain>
              </InputWrap>
              <button type="submit">Update Profile</button>
            </InPutBtnHold>
          </ModalContainer>
        </Overlay>
      ) : null}
    </div>
  );
};

export default UpdateModal;

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
  /* height: 350px; */
  position: fixed;
  top: 50%;
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
  margin: 20px 0;

  textarea {
    height: 60px;
    resize: none;
    width: 95%;
    margin-bottom: 5px;
    font-family: poppins;
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

const InputHold = styled.div`
  input {
    height: 30px;
    width: 250px;
    font-family: poppins;
    margin-bottom: 5px;
  }
`;

const InputWrap = styled.div`
  display: flex;
`;
const WrapMain = styled.div`
  margin: 0 10px;
`;
const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
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
