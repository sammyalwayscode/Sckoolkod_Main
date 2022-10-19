const mongoose = require("mongoose");
const MAINURL =
  "mongodb+srv://school:school@cluster0.xdoz0vd.mongodb.net/SchoolDB?";

const LOCALURL = "mongodb://localhost/schoolManagementDB";

mongoose
  .connect(LOCALURL)
  .then(() => {
    console.log("database connected...");
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = mongoose;
