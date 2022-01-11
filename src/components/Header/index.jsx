import React from "react";
import { makeStyles } from '@mui/styles';
import logo from "../../assets/logo.png";

const useStyles = makeStyles({
  header: {
    paddingBottom: '16px'
  },
});
const Header = () => {
    const classes = useStyles();
    return <header className={classes.header} >
        <img src={logo} alt="logo" />
    </header>
}

export default Header;