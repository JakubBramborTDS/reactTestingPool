import { useState, useEffect } from 'react';

/**
 * Hook for generating progress bar.
 * @param durationMS - time in miliseconds, default to 3 seconds.
 */
export const useProgress = (durationMs: number = 3000) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const intervalTime = durationMs / 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFinished(true);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      setProgress(0);
      setIsFinished(false);
    };
  }, [durationMs]);
  return { progress, isFinished };
};
