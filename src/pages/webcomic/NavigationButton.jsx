export default function NavigationButton({
  prev,
  next,
  openedPage,
  setOpenedPage,
  imageCount: N,
}) {
  const positionClass = prev ? 'left-0' : 'right-0';

  const disabledClass =
    (prev && openedPage > 0) || (next && openedPage < N - 1)
      ? 'bg-blue-600'
      : 'bg-blue-200';

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
