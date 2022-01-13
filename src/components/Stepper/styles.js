import { styled } from "@mui/system";
import { Button as MuiButton, Typography } from "@mui/material";

export const Wrapper = styled("div")({
  width: "100%",
  margin: "0 auto",
  position: "relative",
  height: "100%",
});
export const Steps = styled("div")({
  background: "#fff",
  borderRadius: "16px",
  padding: "20px",
  boxSizing: "border-box",
  height: "390px",
  maxWidth: "calc(1060px - 80px )",
  width: "100%",
  margin: "0 auto",
  position: "relative",
  "@media(max-width: 768px)": {
    height: "auto",
  },
});

export const Title = styled(Typography)({
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "52px",
  textAlign: "center",
  marginBottom: "50px",
  color: "#fff",
  height: "65px",
  "@media(max-width: 768px)": {
    marginBottom: "70px",
  },
});

export const StepWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "100%",
  "@media(max-width: 768px)": {
    flexDirection: "column",
    ".media-left": {
      width: "100%",
      margin: "20px 0 ",
      ".single-img": {
        width: "320px",
      },
    },
    ".content-right": {
      textAlign: "center",
      padding: "0 20px !important",
      p: {
        padding:0,
        paddingBottom: '30px',
        margin: 0,
      },
    },
  },
  ".media-left": {
    textAlign: "center",
    display: "flex",
    "@media(min-width: 992px)": {
      width: "509px",
      minWidth: "509px",
      maxWidth: "509px",
    },
    "@media(min-width: 768px)": {
      width: "50%",
      minWidth: "50%",
      maxWidth: "50%",
    },
    ".single-img": {
      maxWidth: "100%",
    },
  },
  ".step-count": {
    color: "#6C757D",
    fontSize: "12px",
    lineHeight: "16px",
    marginLeft: "38px",
  },
  ".circle": {
    minHeight: "60px",
    minWidth: "60px",
  },
  ".text-card": {
    height: "100px",
    display: "flex",
    alignItems: "center",
  },
  ".pin-icon": {
    background: "rgba(105, 102, 253, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  ".card-icons": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: {
      margin: 0,
      width: "241px",
      padding: "0 10px",
      textAlign: "left",
    },
  },
  ".pr-80": {
    paddingRight: "80px",
  },
  ".w-285px": {
    width: "285px",
    maxWidth: "285px",
    height: "auto",
    margin: "0 auto",
  },
  ".d-block": {
    display: "block",
    margin: "0 auto",
  },
});
export const Info = styled(Typography)((props) => ({
  fontWeight: "500",
  fontSize: "28px",
  lineHeight: "36px",
  marginBottom: "26px",
  paddingRight: "50px",
  color: props.dark ? "#000" : props.theme.palette.primary.main,
}));
export const Button = styled(MuiButton)({
  display: "inline",
  borderRadius: "8px",
  height: "40px",
  width: "88px",
});
export const AddExtension = styled(MuiButton)(({ theme }) => ({
  padding: "10px 0",
  position: "absolute",
  width: "192px",
  height: "40px",
  background: "#1DA9E6",
  color: "white",
  fontSize: "14px",
  lineHeight: "20px",
  right: "0px",
  top: "-58px",
  fontWeight: 600,
  borderRadius: "8px",
  "@media(min-width: 1220px)": {
    top: "-68px",
    right: "-120px",
  },
  "&:hover": {
    background: "#1DA9E6",
    opacity: 0.9,
  },
}));
