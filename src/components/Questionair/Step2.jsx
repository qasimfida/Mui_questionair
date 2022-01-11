import { Button, Steps, Text, Flex, Spacing } from "./styles";
import img from "../../assets/event.png";
import { Grid } from "@mui/material";

const Step2 = ({ step, updateState }) => {
  return (
    <Steps>
      <Flex className="second-card ">
        <img src={img} alt="start" />
        <Text>Are you practicing for a specific event?</Text>
      </Flex>
      <div className="actions">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("event", "interview")}
              variant="contained"
              width="100%"
            >
              Interview
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("event", "presentation")}
              variant="outlined"
              width="100%"
            >
              Presentation with slides
            </Button>
          </Grid>
          <Spacing />
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("event", "speech")}
              variant="outlined"
              width="100%"
            >
              Speech without slides
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => updateState("event", "exploring")}
              variant="outlined"
              width="100%"
            >
              I’m just exploring 🙌
            </Button>
          </Grid>
        </Grid>
      </div>
      <span className="label">{step} of 4</span>
    </Steps>
  );
};

export default Step2;
