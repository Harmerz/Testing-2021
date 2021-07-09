/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

function needTimer(openedPage, passedPage) {
  if (openedPage <= passedPage) return 1;
  return 0;
}

export default function Timer({ openedPage, passedPage, setPassedPage }) {
  const [width, setWidth] = useState(0);

  const widthClass = width === 0 ? 'w-0' : 'w-screen';
  const durationClass =
    width === 0 && !needTimer(openedPage, passedPage)
      ? 'duration-75'
      : 'duration-5000';

  useEffect(() => {
    setWidth(needTimer(openedPage, passedPage));
    setTimeout(() => {
      setWidth(1);
    }, 75);

    let timerTimeout;
    if (passedPage < openedPage) {
      timerTimeout = setTimeout(() => {
        setPassedPage(openedPage);
      }, 5000);
    }

    return () => {
      setWidth(needTimer(openedPage, passedPage));
      clearTimeout(timerTimeout);
    };
  }, [openedPage]);

  return (
    <div
      className={`${widthClass} ${durationClass} transition-width ease-linear h-4 bg-yellow-500 z-20 fixed top-0 left-0`}
    >
      width timer {width}
    </div>
  );
}

// duration: 15seconds
// edit tailwind.config.js for enable transition-width and custom transition-duration
