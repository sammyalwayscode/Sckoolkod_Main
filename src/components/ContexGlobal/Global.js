import { createContext, useState } from "react";
export const GlobalState = createContext();

export const MainGlobal = ({ children }) => {
  const [mobDisplay, setMobDisplay] = useState(false);
  const mobHandler = () => {
    setMobDisplay(!mobDisplay);
  };

  const [openModal, setOpenModal] = useState(false);
  const modalSwitch = () => {
    setOpenModal(!openModal);
  };

  const [addStuModal, setAddStuModal] = useState(false);
  const stuModalSwitch = () => {
    setAddStuModal(!addStuModal);
  };

  const [editTeacherPrifileModal, setEditTeacherPrifileModal] = useState(false);
  const teachModalSwitch = () => {
    setEditTeacherPrifileModal(!editTeacherPrifileModal);
  };

  const [updateStudent, setUpdateStudent] = useState(false);
  const updateStudentModal = () => {
    setUpdateStudent(!updateStudent);
  };

  const [expenseModal, setExpenseModal] = useState(false);
  const addExpenseMod = () => {
    setExpenseModal(!expenseModal);
  };

  return (
    <GlobalState.Provider
      value={{
        mobDisplay,
        setMobDisplay,
        mobHandler,
        modalSwitch,
        openModal,
        addStuModal,
        stuModalSwitch,
        teachModalSwitch,
        editTeacherPrifileModal,
        updateStudent,
        updateStudentModal,
        expenseModal,
        addExpenseMod,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
