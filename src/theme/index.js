import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6966FD",
    },
  },
  colors: {
    primary: "#6966FD",
    gray1: '#343A40',
    gray3: '#6C757D',
    gray8: '#F8F9FA',
    ydblud: '#1DA9E6'

  },
  typography: {
    fontFamily: ["Inter"].join(","),
  },
});

export default theme;
