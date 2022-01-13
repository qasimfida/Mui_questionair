import { styled } from "@mui/system";
import { Typography, Button as MuiButton, Modal } from "@mui/material";

export const ModalWrapper = styled(Modal)({
  width: "100%",
  height: "100%",
});
export const Wrapper = styled("div")({
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "660px",
  minHeight: "499px",
  height: "auto",
  background: "#FFFFFF",
  border: "2px solid #E9ECEF",
  boxSizing: "border-box",
  borderRadius: "16px",
  padding: "16px",
  position: "absolute",
  outline: "none",
});
export const Text = styled(Typography)(({ padding }) => ({
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "32px",
  color: "#000000",
  padding: padding || "32px",
}));
export const Description = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  color: "#000000",
  padding: "0 32px 0",
  marginTop: "8px",
});
export const StartWrapper = styled("div")({
  textAlign: "center",
  padding: "0 42px",
  img: {
    margin: "40px auto 8px",
  },
});

export const Button = styled(MuiButton)(({ width, size }) => ({
  height: size === "xs" ? "20px" : size === "sm" ? "32px" : "49px",
  width: width || "auto",
  padding: "0 16px",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  textAlign: "center",
  textTransform: "capitalize",
}));
export const Spacing = styled("div")(({ spacing }) => ({
  margin: spacing || 1 + "px 0",
  width: "100%",
}));
export const Flex = styled("div")((props) => ({
  display: "flex",
}));
export const Step1 = styled("div")((props) => ({
  padding: "0 82px",
}));
export const Steps = styled("div")(({ theme }) => ({
  '.MuiInput-underline.MuiInputBase-root.Mui-error::before':{
    borderBottom: '1px solid red !important'
  },
  ".first-card": {
    margin: "40px 16px 64px 40px",
    img: {
      marginRight: "12px",
    },
  },
  ".second-card": {
    margin: "42px 16px 68px 42px",
    img: {
      marginRight: "12px",
    },
  },
  ".third-card": {
    margin: "30px 16px 34px 38px",
    img: {
      marginRight: "12px",
    },
  },
  ".fourth-card": {
    margin: "0 16px 34px 38px",
    img: {
      marginRight: "12px",
    },
    ".text-body": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  ".actions": {
    margin: "0 50px",
    ".css-xrpeox-MuiInputBase-root-MuiInput-root": {
      background: theme.colors.gray8,
      borderRadius: "8px",
      height: "32px",
      padding: "8px 12px",
    },
    ".css-xrpeox-MuiInputBase-root-MuiInput-root::after": {
      border: "none",
    },
    ".css-xrpeox-MuiInputBase-root-MuiInput-root::before": {
      border: "none",
    },
  },
  ".date-picker": {
    margin: "0 24px 0 48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "6px",

    ".css-1gctnaj-MuiInputBase-input-MuiFilledInput-input": {
      paddingTop: "4px !important",
      width: "100%",
    },
    ".css-1avy0g2-MuiInputBase-root-MuiFilledInput-root::after": {
      transform: "scaleX(1)",
    },
    ".css-1avy0g2-MuiInputBase-root-MuiFilledInput-root": {
      background: "#F8F9FA",
      width: "368px",
    },
    ".date-label": {
      fontSize: "12px",
      lineHeight: "16px",
      marginBottom: "4px",
      color: theme.palette.primary.main,
      display: "block",
    },
  },
  ".form-flex": {
    display: "flex",
    justifyContent: "center",
    padding: "6px 0",
  },
  ".form-actions": {
    ".invite-btn": {
      padding: "14px 36px",
    },
    input: {
      fontSize: "12px",
      color: theme.colors.gray1,
    },
    ".invite-later-btn": {
      padding: "14px 6px",
      marginLeft: "16px",
    },
  },
  ".form-actions .css-xrpeox-MuiInputBase-root-MuiInput-root": {
    width: "100%",
  },
  ".form-actions .css-xrpeox-MuiInputBase-root-MuiInput-root:hover::after": {
    border: "none",
  },
  ".form-email": {
    margin: "18px 0",
    ".email-row": {
      display: "flex",
      position: "relative",
      ".css-xrpeox-MuiInputBase-root-MuiInput-root": {
        marginTop: "10px",
        marginBottom: "0px",
      },
      input: {
        paddingRight: 0,
        marginBottom: "0px",
      },
      ".action-btns": {
        transform: "scale(0)",
        position: "absolute",
        right: "8px",
        top: "14px",
        svg: {
          height: "14px",
          width: "14px",
          margin: "0 4px",
          borderRadius: "50%",
          border: `1px solid ${theme.colors.gray3}`,
          padding: "3px",
          color: theme.colors.gray3,
          cursor: "pointer",
          transition: '0.3s all ease-in-out',
          "&:hover": {
            transition: '0.3s all ease-in-out',
            color: theme.colors.primary,
            borderColor: theme.colors.primary,
          },
        },
      },
      "&:hover .action-btns ": {
        transform: "scale(1)",
      },
    },
    h2: {
      padding: "0 14px 0",
      height: "32px",
      width: '100%',
      alignItems: "center",
      background: theme.colors.gray8,
      borderRadius: "8px",
      marginTop: "10px",
      marginBottom: "0px",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "16px",
      color: theme.colors.gray1,
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
    },
  },
  ".action-btn": {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    width: "120px",
    minWidth: "120px",
    marginLeft: "8px",
  },
  ".invites-label": {
    fontSize: "12px",
    lineHeight: "16px",
    margin: "0",
    color: theme.palette.primary.main,
    display: "block",
  },
  ".invites": {
    display: "flex",
    alignItems: "end",
    padding: "0 5px",
  },
  ".label": {
    fontSize: "12px",
    lineHeight: "16px",
    color: theme.colors.gray3,
    textAlign: "center",
    margin: "28px auto 2px auto",
    display: "block",
  },
  ".form-items": {
    width: "100%",
  },
}));
