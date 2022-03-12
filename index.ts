import { useEffect, useState, ReactNode, RefObject } from "react";

type Props = {
  values: { [key: string]: ReactNode };
  nextButtonRef: RefObject<HTMLButtonElement>;
  backButtonRef: RefObject<HTMLButtonElement>;
};

const StepWizard = ({ values, nextButtonRef, backButtonRef }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (nextButtonRef.current) {
      nextButtonRef.current.onclick = () => {
        if (currentStep < Object.keys(values).length - 1) {
          setCurrentStep(currentStep + 1);
        }
      };
    }

    if (backButtonRef.current) {
      backButtonRef.current.onclick = () => {
        if (currentStep > 0) {
          setCurrentStep(currentStep - 1);
        }
      };
    }
  }, [nextButtonRef, backButtonRef, currentStep, values]);

  return Object.entries(values).map((values, index) => {
    return index === currentStep && values[0];
  });
};

export default StepWizard;
