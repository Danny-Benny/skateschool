import * as React from "react";
import { Container, Typography } from "@mui/material";
import HorizontalNonLinearStepper from "./components/stepper";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h3">Content</Typography>
        <HorizontalNonLinearStepper />
      </Container>
    </>
  );
}
