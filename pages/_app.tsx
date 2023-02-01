import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";
import { alpha } from "@mui/material";
import Color from "color";
import GuestFooter from "./components/footer";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#9097C0",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    background: {
      default: Color("#BDC7FC").alpha(0.25).string(),
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <GuestFooter />
      </ThemeProvider>
    </>
  );
}
