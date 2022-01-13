import React, { useState } from "react";
import { Wrapper, Steps, Title, AddExtension } from "./styles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Stepper = () => {
  const [step, setStep] = useState(1);
  const updateStep = () => {
    if(step < 4){
      setStep(step + 1);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 step={step} updateStep={updateStep} />;
      case 2:
        return <Step2 step={step} updateStep={updateStep} />;
      case 3:
        return <Step3 step={step} updateStep={updateStep} />;
      case 4:
        return <Step4 step={step} updateStep={updateStep} />;
      default:
        return <Step1 step={step} updateStep={updateStep} />;
    }
  };
  return (
    <Wrapper>
      <Title>Yoodli for Chrome is now active</Title>
      <Steps>
        <AddExtension>Install</AddExtension>
        {renderStep()}
      </Steps>
    </Wrapper>
  );
};

export default Stepper;
