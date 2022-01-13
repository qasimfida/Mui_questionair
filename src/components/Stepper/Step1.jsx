import React from "react";
import { Info, StepWrapper, Button } from "./styles";
import step1 from "../../assets/step1.png";

const Step1 = ({ step, updateStep }) => {
  return (
    <StepWrapper>
      <div className="media-left">
        <img src={step1} alt="step1" className="single-img d-block" />
      </div>
      <div className="content-right" >
        <Info>
          Practice your speeches with slides, docs, or any other background.
        </Info>
        <Button color="primary" variant="contained" onClick={updateStep}>{step > 3 ? "Done" : "Next"}</Button>
        <span className="step-count" >{step} of 4 </span>
      </div>
    </StepWrapper>
  );
};

export default Step1;
