import React from "react";
import { Info, StepWrapper, Button } from "./styles";
import step2 from "../../assets/step2.png";

const Step1 = ({ step, updateStep }) => {
  return (
    <StepWrapper>
      <div className="media-left">
        <img src={step2} alt="step2" className="single-img d-block" />
      </div>
      <div className="content-right">
        <Info>
          Click on the Yoodli icon to see analytics on your verbal and nonverbal communication
        </Info>
        <Button color="primary" variant="contained" onClick={updateStep}>{step > 3 ? "Done" : "Next"}</Button>
        <span className="step-count" >{step} of 4 </span>
      </div>
    </StepWrapper>
  );
};

export default Step1;
