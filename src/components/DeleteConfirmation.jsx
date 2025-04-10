import { useEffect, useState } from 'react';

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  // Update the remaining time every 10ms and clear the interval when the modal disappears
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  // Functions as useEffect dependencies can trigger reruns on every render
  useEffect(() => {
    const timerId = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timerId);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER}/>
    </div>
  );
}
