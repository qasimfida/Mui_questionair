import { Button, Steps, Text, Flex, Spacing } from "./styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import img from "../../assets/calendar.png";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import moment from "moment";

const Step3 = ({ step, updateState }) => {
  const [date, setDate] = useState(moment().format("LL"));
  return (
    <Steps>
      <Flex className="third-card ">
        <img src={img} alt="start" />
        <Text>When is your speech? We’ll build you an action plan</Text>
      </Flex>
      <div className="date-picker">
        <div >
          <label className="date-label" >Select date</label>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              openTo="day"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              format={"yyyy/MMM/dd"}
              renderInput={(params) => <TextField variant="filled" {...params} />}
            />
          </LocalizationProvider>
        </div>
        <Button
          className="action-btn"
          size="sm"
          onClick={() => updateState("date", date)}
          variant="contained"
        >
          Set date
        </Button>
      </div>
      <span className="label">{step} of 4</span>
    </Steps>
  );
};

export default Step3;