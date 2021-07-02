import React, { useState } from "react";
import { Stepper, Step, StepLabel, Paper } from "@material-ui/core";
import One from "./Steps/One";
import Two from "./Steps/Two";
import Three from "./Steps/Three";
import Four from "./Steps/Four";
import Five from "./Steps/Five";
import Confirm from "./Steps/Confirm";

const initialValues = {
  name: "",
  maidenName: "",
  birthPlace: "",
  petName: "",
  favBook: "",
};

const steps = ["One", "Two", "Three", "Four", "Confirm"];

function Security() {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

  const handleNext = () => setActiveStep((prev) => prev + 1); //next button
  const prevButton = () => setActiveStep((prev) => prev - 1); // previous button
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    console.log(formValues);
    // Check Value
  };
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <One
            handleNext={handleNext}
            handleChange={handleChange}
            formvalues={formValues}
          />
        );
      case 1:
        return (
          <Two
            prevButton={prevButton}
            handleNext={handleNext}
            handleChange={handleChange}
            formvalues={formValues}
          />
        );
      case 2:
        return (
          <Three
            prevButton={prevButton}
            formvalues={formValues}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 3:
        return (
          <Four
            prevButton={prevButton}
            handleNext={handleNext}
            handleChange={handleChange}
            formvalues={formValues}
          />
        );
      case 4:
        return (
          <Five
            prevButton={prevButton}
            handleNext={handleNext}
            handleChange={handleChange}
            formvalues={formValues}
          />
        );

      case 5:
        return (
          <Confirm
            prevButton={prevButton}
            handleChange={handleChange}
            formvalues={formValues}
            handleSubmit={onSubmit}
          />
        );
    }
  }

  return (
    <div className="logShipPayoutStCont">
      {false ? (
        <Paper className="lonShipSecondCont">
          <p>Done</p>
        </Paper>
      ) : (
        <Paper className="lonShipSecondCont">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((i) => (
              <Step key={i}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>{getStepContent(activeStep)}</div>
        </Paper>
      )}
    </div>
  );
}

export default Security;
