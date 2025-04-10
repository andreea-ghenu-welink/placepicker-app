import { useEffect, useState } from 'react';

// Exported as a separate component to avoid unnecessary re-renders on parent component
export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  // Update the remaining time every 10ms and clear the interval when the modal disappears
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <progress value={remainingTime} max={timer}/>
  );
}