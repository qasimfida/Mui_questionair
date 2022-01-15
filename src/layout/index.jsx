import React from "react";
import bg from "../assets/bg.png";
import { styled } from "@mui/system";
import { Analytics, Game, Upload } from "./icons";
 const Wrapper = styled("div")({
  background: '#f8f8f8',
});
 const Footer = styled("div")({
  padding: '50px 0',
  maxWidth: "1060px",
  margin: "0 auto",
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  "@media(min-width: 992px)":{
    flexWrap: 'nowrap'
  },
});
 const IconBox = styled("div")(({theme})=> ({
  borderRadius: "8px",
  background: "#fff",
  padding: "48px 48px 0",
  margin: '8px',
  textAlign: 'center',
  boxShadow: '0 0 9px 1px #eeeeee',
  boxSizing: 'border-box',
  height: '260px',
  width: '300px',
  minHeight: '260px',
  minWidth: '300px',
  p: {
    marginTop: "16px",
    color: theme.colors.primary,
    fontSize: '22px'
  },
}));
const LayoutWrapper = styled("div")({
  padding: "38px 50px 72px",
  background: `url(${bg})`,
  backgroundSize: "cover",
  "@media(max-width: 1060px)": {
    padding: "38px 20px 70px",
  },
});
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer>
        <IconBox>
          <Upload /> <p>Upload a speech</p>
        </IconBox>
        <IconBox>
          <Game /> <p>Practice with games</p>
        </IconBox>
        <IconBox>
          <Analytics /> <p>Get AI analytics and peer feedback</p>
        </IconBox>
      </Footer>
    </Wrapper>
  );
};
export default Layout;
