import { Button, Spacing, StartWrapper, Text } from "./styles";
import img from "../../assets/start.png";

const Start = ({updateState}) => {
  return (
    <StartWrapper>
      <img src={img} alt="start" />
      <Text>
        Help us answer a few questions to give you a mic dropping experience.{" "}
      </Text>
      <Spacing space={4} />
      <Button width="114px" onClick={()=>updateState()} variant="contained" >Let's go</Button>
    </StartWrapper>
  );
};

export default Start;
