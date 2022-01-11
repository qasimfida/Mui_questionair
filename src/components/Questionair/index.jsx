import { ModalWrapper, Wrapper } from "./styles";
import Start from "./start";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
const Questionair = () => {
  const [open, setOpen] = useState(false)
  const [state, setstate] = useState({
    speaking: "",
    event: "",
    date: "",
    emails: [],
  });
  const [step, setStep] = useState(0);
  const updateState = (key, value) => {
    if (key) {
      setstate({
        [key]: value,
      });
    }
    setStep(step + 1);
    if(step == 4){
      setOpen(false)
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Start updateState={updateState} />;
      case 1:
        return <Step1 updateState={updateState} step={step} />;
      case 2:
        return <Step2 updateState={updateState} step={step} />;
      case 3:
        return <Step3 updateState={updateState} step={step} />;
      case 4:
        return <Step4 handleClose={()=>setOpen(false)} updateState={updateState} step={step} />;
      default:
        return <Start updateState={updateState} />;
    }
  };
  return (
    <ModalWrapper open={open}>
      <Wrapper>{renderStep()}</Wrapper>
    </ModalWrapper>
  );
};
export default Questionair;
