import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  trick: string;
}

const steps = [
  "Prohlédni si video",
  "Podrobné vysvětlení",
  "Nahraj svůj pokus!",
];

const HorizontalNonLinearStepper: React.FC<Props> = ({ trick }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleVideo = () => {
    if (activeStep === 0) {
      return (
        <Box
          sx={{
            width: "657px",
            height: "390px",
            borderRadius: "15px",
            boxShadow: "10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <iframe
            width="597"
            height="336"
            src={`https://www.youtube.com/embed/${trick}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Box>
      );
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>vše hotovo</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button onClick={handleReset}>Resetovat</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {handleVideo()}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 2 }}
              >
                Zpět
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleComplete}
              >
                {completedSteps() === totalSteps() - 1
                  ? "Ukončit"
                  : "Pokračovat"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};

export default HorizontalNonLinearStepper;
