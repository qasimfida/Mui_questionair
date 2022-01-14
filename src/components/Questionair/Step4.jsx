import { Button, Steps, Text, Flex, Spacing, Description } from "./styles";
import img from "../../assets/invites.png";
import { Input, Button as MuiButton } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const Step4 = ({ step, updateState, handleClose }) => {
  const [emails, setEmails] = useState([
    "andyl@allenai.org",
    "helena@allenai.org",
  ]);
  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [error, setError] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const isValid = (value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  };
  const addInvite = () => {
    if(isValid(email)){
      setEmails([...emails, email]);
      setError(false)
      setEmail('');
    }
    setError(true)
  };
  const onEdit = (key, value) => {
    setEditEmail(value);
    setIsEdit(key);
  };
  const handleEmailChange = (e) => {
    setEditEmail(e.target.value);
  };
  const onSave = () => {
    if (isValid(editEmail)) {
      const arr = [...emails];
      arr[isEdit] = editEmail;
      setEmails([...arr]);
      setIsEdit(null);
      setEditEmail('');
    }
    setError(true);
  };
  const onDelete = (i) => {
    const arr = [...emails];
    arr.splice(i, 1);
    setEmails([...arr]);
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
              disabled={emails.length === 3}
              error={error && isEdit === null}
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
          {emails.map((email, index) => (
            <div className="email-row" key={`${index}`}>
              {isEdit === index ? (
                <Input
                  placeholder="Your email"
                  value={editEmail}
                  autoFocus
                  error={error && isEdit !== null}
                  onChange={handleEmailChange}
                />
              ) : (
                <h2>{email}</h2>
              )}
              <div className="action-btns">
                {isEdit === index ? (
                  <CheckIcon onClick={() => onSave()} />
                ) : (
                  <EditIcon onClick={() => onEdit(index, email)} />
                )}
                <DeleteIcon onClick={() => onDelete(index)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="actions form-actions form-flex ">
        <Button
          className="invite-btn"
          variant="contained"
          onClick={() => updateState("emails", emails)}
        >
          Invite
        </Button>
        <Button onClick={handleClose} className="invite-later-btn">
          Invite Later
        </Button>
      </div>
      <span className="label">{step} of 4</span>
    </Steps>
  );
};

export default Step4;
