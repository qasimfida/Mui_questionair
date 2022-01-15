import { Button, Steps, Text, Flex, Spacing } from "./styles";
import img from "../../assets/event.png";
import { Grid } from "@mui/material";
import { useEffect } from "react";

const Step2 = ({ step, updateState, cursor, options, updateCursor }) => {
  useEffect(()=>{
    updateCursor();
  },[])
  return (
    <Steps>
      <Flex className="second-card ">
        <img src={img} alt="start" />
        <Text>Are you practicing for a specific event?</Text>
      </Flex>
      <div className="actions">
        <Grid container spacing={1}>
          {options.map((option, index) => (
            <Grid item xs={6} key={`${index}`}>
              <Button
                onClick={() => updateState("event", option)}
                variant={cursor === index ? "contained" : "outlined"}
                width="100%"
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
      <span className="label">{step} of 4</span>
    </Steps>
  );
};

export default Step2;
