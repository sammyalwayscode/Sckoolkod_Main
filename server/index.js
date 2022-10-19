require("./utils/db");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 2332 || process.env.PORT;

// app.use(cors());
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "We are ready✌️...!" });
});

app.use("/api/admin", require("./WorkPut/AdminFile/AdminRouter/AdminRouter"));
app.use("/api/teacher", require("./WorkPut/TeacherFile/TeacherRouter"));
app.use("/api/class", require("./WorkPut/classFile/classRouter"));
app.use("/api/student", require("./WorkPut/studentsFile/studentRouter"));
app.use("/api/expense", require("./WorkPut/Expense/ExpensesRoute"));
app.use("/api/subject", require("./WorkPut/subjectFile/subjectRouter"));
app.use(
  "/api/performance",
  require("./WorkPut/performanceFile/performanceRouter")
);

app.listen(port, () => {
  console.log("server is now connected");
});

module.exports = app;
