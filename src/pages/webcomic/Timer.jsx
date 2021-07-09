/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

function needTimer(openedPage, passedPage) {
  if (openedPage - passedPage === 1) return true;
  return false;
}

export default function Timer({ openedPage, passedPage, setPassedPage }) {
  const [percentage, setPercentage] = useState(0);

  const timeoutTime = 10; // (ms)
  const timerTime = 15000; // (ms)

  useEffect(() => {
    if (!needTimer(openedPage, passedPage)) {
      setPercentage(100);
    } else {
      setPercentage(0);
    }
  }, [openedPage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPercentage(percentage + (100 * timeoutTime) / timerTime);
    }, timeoutTime);

    if (percentage >= 100) {
      clearTimeout(timeout);
      if (needTimer(openedPage, passedPage)) setPassedPage(openedPage);
    }
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div
      style={{ width: `${percentage}vw` }}
      className="h-4 bg-yellow-500 z-20 fixed top-0 left-0"
    >
      width: {percentage}%
    </div>
  );
}

// duration: 15seconds
// edit tailwind.config.js for enable transition-width and custom transition-duration
