import { Button, Steps, Text, Flex, Spacing, Description } from "./styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import img from "../../assets/invites.png";
import { Grid, Input, TextField } from "@mui/material";
import { useState } from "react";
import moment from "moment";

const Step4 = ({ step, updateState, handleClose }) => {
  const [emails, setEmails] = useState([
    "andyl@allenai.org",
    "helena@allenai.org",
  ]);
  const [email, setEmail] = useState("");
  const addInvite = () => {
    setEmails([...emails, email]);
  };
  return (
    <Steps>
      <Flex className="fourth-card ">
        <img src={img} alt="start" />
        <div className="text-body">
          <Text padding="32px 32px 0">Add an accountability buddy!</Text>
          <Description>
            Over 90% of our users invite friends who hold them accountable to
            practice.
          </Description>
        </div>
      </Flex>
      <div className="actions form-actions">
        <div className="invites">
          <div className="form-items">
            <label className="invites-label">E-mail</label>
            <Input
              placeholder="Typing email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <Button
            className="action-btn"
            size="sm"
            disabled={emails.length === 3}
            onClick={() => addInvite()}
            variant="outlined"
          >
            Add email
          </Button>
        </div>
        <div className="form-email">
          <label className="invites-label">
            Invited ({` ${emails.length} / 3`})
          </label>
          {emails.map((email) => (
            <h2>{email}</h2>
          ))}
        </div>
      </div>
      <div className="actions form-actions form-flex ">
        <Button className="invite-btn" variant="contained" onClick={()=>updateState('emails', emails)} >Invite</Button>
        <Button onClick={handleClose} className="invite-later-btn" >Invite Later</Button>
      </div>
      <span className="label">{step} of 4</span>
    </Steps>
  );
};

export default Step4;
