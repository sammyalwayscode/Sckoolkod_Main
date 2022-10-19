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

const ProfileUpdate = () => {
  const { updateStudent, updateStudentModal } = useContext(GlobalState);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const id = user._id;

  const yupSchema = yup.object().shape({
    // gender: yup.string().required("Gender profile has to be filled"),
    // fullName: yup.string().required("fullName profile has to be filled"),
    profile: yup.string().min(30).required("Prifile profile has to be filled"),
    parentPhone: yup.string().required("Phone Number profile has to be filled"),
    parentName1: yup.string().required("Father's profile has to be filled"),
    parentName2: yup.string().required("Mother's profile has to be filled"),
    DOB: yup.string().required("Your Date Of Birth"),
    FathersOccupation: yup
      .string()
      .required("Father's Job profile has to be filled"),
    religion: yup.string().required("Religion profile has to be filled"),
    Address: yup.string().required("Address profile has to be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/student/${user._id}`;

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

  const [studentDetailGet, setStudentDetailGet] = React.useState({});

  const getTeachers = async () => {
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/student/${user._id}`;
    console.log(user._id);

    await axios.get(url).then((res) => {
      setStudentDetailGet(res.data.data);
      console.log(res.data.data);
    }, []);
  };

  React.useEffect(() => {
    getTeachers();
    console.log(studentDetailGet);
  }, []);

  return (
    <div>
      {updateStudent ? (
        <Overlay onClick={updateStudentModal}>
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
                      // value={studentDetailGet.fullName}
                      disabled
                      placeholder={studentDetailGet.fullName}
                    />
                  </InputHold>
                  <InputHold>
                    <Label>Gender</Label>
                    <input disabled placeholder={studentDetailGet.gender} />
                  </InputHold>
                  <InputHold>
                    <Label>Father's Name</Label>
                    <input
                      defaultValue={studentDetailGet.parentName1}
                      placeholder="Father's Name"
                      {...register("parentName1")}
                    />
                    <Error>{errors?.parentName1?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Mother's Name</Label>
                    <input
                      defaultValue={studentDetailGet.parentName2}
                      placeholder="Mother's Name"
                      {...register("parentName2")}
                    />
                    <Error>{errors?.parentName2?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Religion</Label>
                    <select placeholder="Religion" {...register("religion")}>
                      <option>Christian</option>
                      <option>Islam</option>
                      <option>Triditional</option>
                      <option>Others</option>
                    </select>
                    <Error>{errors?.religion?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Email</Label>
                    <input disabled placeholder={studentDetailGet.email} />
                  </InputHold>
                </WrapMain>
                <WrapMain>
                  <InputHold>
                    <Label>Date Of Birth</Label>
                    <input
                      defaultValue={studentDetailGet.DOB}
                      placeholder="Subject"
                      {...register("DOB")}
                    />
                    <Error>{errors?.DOB?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Class Room</Label>
                    <input
                      disabled
                      placeholder={studentDetailGet.nameOfClass}
                    />
                  </InputHold>
                  <InputHold>
                    <Label>Father's Occupation</Label>
                    <input
                      defaultValue={studentDetailGet.FathersOccupation}
                      placeholder="Your Father's Work"
                      {...register("FathersOccupation")}
                    />
                  </InputHold>
                  <InputHold>
                    <Label>Your Code</Label>
                    <input
                      disabled
                      placeholder={studentDetailGet.studentCode}
                    />
                  </InputHold>
                  <InputHold>
                    <Label>Home Address</Label>
                    <input
                      defaultValue={studentDetailGet.Address}
                      placeholder="Home Address"
                      {...register("Address")}
                    />
                    <Error>{errors?.Address?.message}</Error>
                  </InputHold>
                  <InputHold>
                    <Label>Phone Number</Label>
                    <input
                      defaultValue={studentDetailGet.parentPhone}
                      placeholder="Phone Number"
                      {...register("parentPhone")}
                    />
                    <Error>{errors?.parentPhone?.message}</Error>
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

export default ProfileUpdate;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  font-family: poppins;
  z-index: 600;
  /* display: flex;
  justify-content: center; */
  align-items: center;
`;
const ModalContainer = styled.div`
  /* max-width: 600px; */
  /* width: 100%; */
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

  select {
    height: 35px;
    width: 260px;
    font-family: poppins;
    margin-bottom: 5px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  /* flex-direction: column; */
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
