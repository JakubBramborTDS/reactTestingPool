import { useState, useEffect } from 'react';

/**
 * Hook for generating progress bar.
 *
 */
export const useProgress = (speed = 10, maxSteps = 20) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= maxSteps) return;
    const timeout = setTimeout(() => setCurrentStep((prev) => prev + 1), speed);
    return () => clearTimeout(timeout);
  }, [currentStep, maxSteps, speed]);

  return {
    currentStep,
    totalSteps: maxSteps,
    isFinished: currentStep >= maxSteps,
  };
};
