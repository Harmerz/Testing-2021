export default function NavigationButton({
  prev,
  next,
  openedPage,
  setOpenedPage,
  imageCount: N,
  passedPage,
}) {
  const positionClass = prev ? 'left-0' : 'right-0';

  const disabledClass =
    (prev && openedPage <= 0) ||
    (next && openedPage >= N - 1) ||
    openedPage > passedPage
      ? 'bg-blue-200 pointer-events-none'
      : 'bg-blue-600 pointer-events-auto';

  const clickHandler = (e) => {
    e.preventDefault();
    if (prev && openedPage > 0) setOpenedPage(openedPage - 1);
    if (next && openedPage < N - 1) setOpenedPage(openedPage + 1);
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`cursor-pointer bg-red z-10 fixed h-screen p-4 ${positionClass} ${disabledClass}`}
    >
      {prev && '<'} {next && '>'}
    </button>
  );
}
