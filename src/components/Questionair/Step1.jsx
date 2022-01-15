import { Button, Steps, Text, Flex, Spacing } from "./styles";
import img from "../../assets/comment.png";
import { Grid } from "@mui/material";
import { useEffect } from "react";

const Step1 = ({ step, updateState, cursor, options, updateCursor }) => {
  useEffect(()=>{
    updateCursor();
  },[])
  return (
    <Steps>
      <Flex className="first-card ">
        <img src={img} alt="start" />
        <Text>What part of public speaking would you like to focus on?</Text>
      </Flex>
      <div className="actions">
        <Grid container spacing={1}>
          {options.map((option, index) => (
            <Grid item xs={6} key={`${index}`}>
              <Button
                onClick={() => updateState("speaking", option)}
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

export default Step1;
