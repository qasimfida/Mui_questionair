import React from "react";
import { makeStyles } from "@mui/styles";
import bg from '../assets/bg.png'

const useStyles = makeStyles({
  layout: {
    padding: "38px 50px 72px",
    background: `url(${bg})`,
    backgroundSize: 'cover'
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.layout}>{children}</div>;
};
// export const WithSidebar;
export default Layout;