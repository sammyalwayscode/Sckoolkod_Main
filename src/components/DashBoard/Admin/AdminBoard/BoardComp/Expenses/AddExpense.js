import React, { useContext } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../../../ContexGlobal/Global";

const AddStudentModal = () => {
  const { expenseModal, addExpenseMod } = useContext(GlobalState);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const id = user._id;

  const yupSchema = yup.object().shape({
    itemName: yup.string().required("itemName has to be filled"),
    itemQuantity: yup.number().required("itemQuantity has to be filled"),
    expenseAmount: yup.string().required("expenseAmount has to be filled"),
    sourcePurchase: yup.string().required("sourcePurchase has to be filled"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    // const { expenseAmount, itemName, itemQuantity, sourcePurchase } = val;
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/expense/${user._id}`;

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
      {expenseModal ? (
        <Overlay onClick={addExpenseMod}>
          <ModalContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3>Add Expense</h3>
            <InPutBtnHold onSubmit={onSubmit}>
              <InputHold>
                <Label>Item name</Label>
                <input
                  placeholder="e.g water bottle"
                  {...register("itemName")}
                />
                <Error>{errors?.itemName?.message}</Error>
              </InputHold>
              <InputHold>
                <Label>Item Quantity</Label>
                <input
                  type="number"
                  placeholder="e.g 6"
                  {...register("itemQuantity")}
                />
                <Error>{errors?.itemQuantity?.message}</Error>
              </InputHold>
              <InputHold>
                <Label>Amount Per Quantity</Label>
                <input
                  type="number"
                  placeholder="e.g 6300"
                  {...register("expenseAmount")}
                />
                <Error>{errors?.expenseAmount?.message}</Error>
              </InputHold>
              <InputHold>
                <Label>Source of Purchase</Label>
                <input
                  placeholder="e.g Tayo Wears"
                  {...register("sourcePurchase")}
                />
                <Error>{errors?.sourcePurchase?.message}</Error>
              </InputHold>

              <button type="submit">Add Expence</button>
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
  height: 390px;
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

const InputHold = styled.div`
  input {
    height: 30px;
    width: 280px;
    font-family: poppins;
    margin-bottom: 5px;
  }
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
