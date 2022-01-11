import React from "react";
import { Info, StepWrapper, Button } from "./styles";
import step4 from "../../assets/step4.png";

const Step4 = ({ step, updateStep }) => {
  return (
    <StepWrapper>
      <div className="media-left">
        <img src={step4} alt="step4" className="single-img w-285px d-block" />
      </div>
      <div>
        <Info>
            Click the pinned icon and start practicing your first speech
        </Info>
        <Button color="primary" variant="contained" onClick={updateStep}>{step > 3 ? "Done" : "Next"}</Button>
        <span className="step-count" >{step} of 4 </span>
      </div>
    </StepWrapper>
  );
};

export default Step4;
