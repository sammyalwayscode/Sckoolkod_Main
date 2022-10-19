import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { alpha } from "@material-ui/core/styles";
const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
      <DatePicker
      style={{height:"350px"}}
        autoOk
        variant="static"
        openTo="year"
        value={date}
        onChange={changeDate}
      />

      {/* <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      /> */}
    </>
  );
};

export default StaticDatePicker;
