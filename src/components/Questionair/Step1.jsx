import { Button, Steps, Text, Flex, Spacing } from "./styles";
import img from "../../assets/comment.png";
import { Grid } from "@mui/material";

const Step1 = ({ step, updateState }) => {
  return (
    <Steps>
      <Flex className="first-card ">
        <img src={img} alt="start" />
        <Text>What part of public speaking would you like to focus on?</Text>
      </Flex>
      <div className="actions">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("speaking" ,"words")}
              variant="contained"
              width="100%"
            >
              Reducing um filler words
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("speaking" ,"slowly")}
              variant="outlined"
              width="100%"
            >
              Talking more slowly
            </Button>
          </Grid>
          <Spacing />
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("speaking" ,"nerves")}
              variant="outlined"
              width="100%"
            >
              Managing my nerves
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("speaking" ,"cuff")}
              variant="outlined"
              width="100%"
            >
              Speaking off the cuff
            </Button>
          </Grid>
        </Grid>
      </div>
      <span className="label">{step} of 4</span>
    </Steps>
  );
};

export default Step1;
