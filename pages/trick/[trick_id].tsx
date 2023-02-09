import * as React from "react";
import { Container, Typography } from "@mui/material";
import HorizontalNonLinearStepper from "@/components/stepper";
import { useRouter } from "next/router";

const TrickInfo: React.FC = () => {
  const router = useRouter();
  const trick_id = router.query.trick_id as string;

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h3"></Typography>
        <HorizontalNonLinearStepper trick={trick_id} />
      </Container>
    </>
  );
};

export default TrickInfo;
