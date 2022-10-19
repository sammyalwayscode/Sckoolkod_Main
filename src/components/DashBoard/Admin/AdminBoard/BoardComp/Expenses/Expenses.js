import * as React from "react";
import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../../../ContexGlobal/Global";
import AddExpense from "./AddExpense";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Students = () => {
  const { classID } = useParams();
  const { addExpenseMod } = useContext(GlobalState);

  const [expense, setExpense] = React.useState([]);
  const user = useSelector((state) => state.user);

  console.log(classID);

  const getClasses = async () => {
    const mainURL = "";
    const localURL = "http://localhost:2332";
    const globalURL = "https://sckoolkode-bakend.herokuapp.com";
    const url = `${localURL}/api/expense/${user._id}`;

    await axios.get(url).then((res) => {
      setExpense(res.data.data.expense);
      console.log(res.data.data.expense);
    }, []);
  };

  React.useEffect(() => {
    getClasses();
    // console.log(expense);
  }, []);

  return (
    <>
      <AddExpense />
      <Container>
        <Wrapper>
          <DisplayBtnHold>
            <h3> {user.schoolName} Expenses Report </h3>
            <button onClick={addExpenseMod}>Add Expense</button>
          </DisplayBtnHold>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Item Name</StyledTableCell>
                  <StyledTableCell align="right">
                    Quantity of Items Bought
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Amount Per Item
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Source Of Purchase
                  </StyledTableCell>
                  <StyledTableCell align="right">Total Cost</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expense.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row.itemName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.itemQuantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      N{row.expenseAmount}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.sourcePurchase}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      N{row.expenseAmount * row.itemQuantity}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Students;

const TitBtnHold = styledComponents.div`
display:flex;
justify-content: space-between
`;

const Container = styledComponents.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
  font-family: poppins;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styledComponents.div`
width: 1150px;
@media (max-width: 1150px) {
  width: 95%;
}
`;

const DisplayBtnHold = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;

button{
  height: 30px;
  width: 110px;
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
`;
