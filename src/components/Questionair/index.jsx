import { ModalWrapper, Wrapper } from "./styles";
import Start from "./start";
import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import moment from "moment";
const step1Options = [
  "Reducing um filler words",
  "Talking more slowly",
  "Managing my nerves",
  "Speaking off the cuff ",
];
const step2Options = [
  "Interview",
  " Presentation with slides",
  " Speech without slides",
  "I’m just exploring 🙌",
];
const step3Options = [
  "Interview",
  " Presentation with slides",
  " Speech without slides",
  "I’m just exploring 🙌",
];
const Questionair = () => {
  const [open, setOpen] = useState(true);
  const [cursor, setCursor] = useState(0);
  const [state, setState] = useState({
    speaking: "",
    event: "",
    date: moment().format("L"),
    emails: [],
  });
  const [step, setStep] = useState(3);
  const updateState = (key, value) => {
    if (key === "date" && !validDate(value)) {
      return 0
    } else {
      if (key) {
        setState({
          [key]: value,
        });
      }
      setStep(step + 1);
      if (step == 4) {
        setOpen(false);
      }
    }
  };
  const editState = (key, value) => {
    setState({ ...state, [key]: value });
  };
  const validDate = (date) => {
    const b = moment().utc();
    const a = moment(date);
    const d = a.diff(b,'days');
    return d < 0 ? false : true;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKeys);
    return () => {
      window.removeEventListener("keydown", handleArrowKeys);
    };
  });

  const handleLeftRight = (code) => {
    let current = code === "ArrowRight" ? cursor + 1 : cursor - 1;
    if (cursor === 3) {
      setCursor(0);
    } else {
      setCursor(current);
    }
  };
  const handleUpDown = (code) => {
    if (cursor === 3 || cursor === 2) {
      setCursor(cursor - 2);
    } else {
      setCursor(cursor + 2);
    }
  };

  const handleArrowKeys = ({ code }) => {
    if (code === "Enter") {
      if (step === 0) {
        updateState(1);
      }
      if (step === 1) {
        updateState(step1Options[cursor], "words");
      }
      if (step === 2) {
        updateState(step1Options[cursor], "words");
      }
      if (step === 3) {
        if (validDate(state.date)) {
          updateState(state.date, "date");
        }
      }
    } else if (code === "ArrowRight" || code === "ArrowLeft") {
      handleLeftRight(code);
    } else if (code === "ArrowUp" || code === "ArrowDown") {
      handleUpDown(code);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 0:
        return <Start updateState={updateState} />;
      case 1:
        return (
          <Step1
            updateState={updateState}
            options={step1Options}
            cursor={cursor}
            state={state.speaking}
            step={step}
          />
        );
      case 2:
        return (
          <Step2
            updateState={updateState}
            options={step2Options}
            cursor={cursor}
            state={state.event}
            step={step}
          />
        );
      case 3:
        return (
          <Step3
            updateState={updateState}
            cursor={cursor}
            step={step}
            state={state.date}
            editState={editState}
          />
        );
      case 4:
        return (
          <Step4
            state={state.emails}
            handleClose={() => setOpen(false)}
            updateState={updateState}
            step={step}
            cursor={cursor}
          />
        );
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
