import { useState, useEffect } from 'react';

export default function NavigationButton({
  prev,
  next,
  openedPage,
  setOpenedPage,
  imageCount: N,
  progress,
}) {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      (prev && openedPage <= 0) ||
        (next && openedPage >= N - 1) ||
        progress < 100
    );
  }, [openedPage, progress]);

  const disabledClass = isDisabled
    ? 'pointer-events-none'
    : 'pointer-events-auto';

  const clickHandler = (e) => {
    e.preventDefault();
    if (prev && openedPage > 0) setOpenedPage(openedPage - 1);
    if (next && openedPage < N - 1) setOpenedPage(openedPage + 1);
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={clickHandler}
      style={{ color: isDisabled ? '#777777' : '#0C181D' }}
      className={`cursor-pointer w-8 md:w-10 lg:w-16 ${disabledClass} transform-none lg:transform duration-200 hover:-translate-y-1 filter-none lg:filter hover:drop-shadow-lg`}
    >
      {next && (
        <svg
          viewBox="0 0 100 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 56V111.9L45.9 205.7C71.1 257.3 92.9 302 94.4 305L97.1 310.5L48.6 409.8L0 509.1V554.5V600H50H100V300V0H50H0V56Z"
            fill="currentColor"
          />
          <path
            d="M0.0999756 310.5V455.5L4.89998 445.5C7.59998 440 22.4 409.6 38 378C53.5 346.4 67.3 318.2 68.5 315.4L70.9 310.2L37.7 242.3C19.4 205 3.49998 172.4 2.29998 170L0.0999756 165.5V310.5Z"
            fill="currentColor"
          />
        </svg>
      )}
      {prev && (
        <svg
          viewBox="0 0 100 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 300V600H50H100V554.5V509.1L51.4 409.8L2.9 310.5L5.6 305C7.1 302 28.9 257.3 54.1 205.7L100 111.9V56V0H50H0V300Z"
            fill="currentColor"
          />
          <path
            d="M64.6 237.8C45.4 277 29.7 309.8 29.7 310.5C29.7 311.2 45.4 344 64.6 383.2L99.5 454.6L99.7999 382.2C99.9 342.4 99.9 277.6 99.7999 238.1L99.5 166.4L64.6 237.8Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
