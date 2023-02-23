import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Color from "color";
import GuestFooter from "../components/footer";
import { forwardRef } from "react";
import NextLink from "next/link";
import { getApolloClient } from "@/utility/apollo-client";
import { ApolloProvider } from "@apollo/client";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  //@ts-ignore
  return <NextLink ref={ref} {...props} />;
});

const client = getApolloClient({ forceNew: false });

const theme = createTheme({
  palette: {
    primary: {
      main: "#9097C0",
    },
    secondary: {
      main: "#11cb5f",
    },
    background: {
      default: Color("#BDC7FC").alpha(0.25).string(),
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        //@ts-ignore
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          textDecoration: "none",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <GuestFooter />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
