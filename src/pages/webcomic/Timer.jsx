/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

function needTimer(openedPage, passedPage) {
  if (openedPage < passedPage) return 0;
  return 1;
}

export default function Timer({ openedPage, passedPage, setPassedPage }) {
  // const [width, setWidth] = useState(!needTimer(openedPage, passedPage));
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(needTimer(openedPage, passedPage));
    setTimeout(() => {
      setWidth(1);
    }, 1000);
  }, [openedPage]);

  const widthClass = width === 0 ? 'w-0' : 'w-screen';
  const durationClass = width === 0 ? 'duration-75' : 'duration-15000';

  return (
    <div
      className={`${widthClass} ${durationClass} h-4 bg-yellow-500 z-20 fixed top-0 left-0 transition-width ease-linear`}
    />
  );
}

// duration: 15seconds
// edit tailwind.config.js for enable transition-width and custom transition-duration
