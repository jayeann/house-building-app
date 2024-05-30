import React from "react";

interface StepHeaderProps {
  step: number;
  question: string;
}

function StepHeader({ step, question }: StepHeaderProps) {
  const maxStep = 5;
  return (
    <>
      STEP {step}/{maxStep}
      <h2>{question}</h2>
    </>
  );
}

export default StepHeader;
