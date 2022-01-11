import React from "react";
import { Info, StepWrapper, Button } from "./styles";
import logo from "../../assets/circled-logo.png";
import pin from "../../assets/pin.png";

const Step3 = ({ step, updateStep }) => {
  return (
    <StepWrapper>
      <div className="media-left card-icons">
        <img src={logo} alt="logo" className="img-left circle" />
        <Info dark>Title placeholder</Info>
        <div className="pin-icon circle">
          <img src={pin} alt="pin" />
        </div>
      </div>
      <div className="pr-80">
        <Info>
          <div className="text-card">
            Pin Yoodli to your browser for quick access
          </div>
        </Info>
        <Button color="primary" variant="contained" onClick={updateStep}>
          {step > 3 ? "Done" : "Next"}
        </Button>
        <span className="step-count">{step} of 4 </span>
      </div>
    </StepWrapper>
  );
};

export default Step3;
