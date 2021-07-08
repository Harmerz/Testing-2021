export default function Comic({ openedPage, imageCount }) {
  const baseImageUrl = 'https://ik.imagekit.io/lutfiandri/webcomic-kesatria/';
  const extraStyles = {
    width: `${100 * imageCount}vw`,
    '--tw-translate-x': `-${100 * openedPage}vw`,
  };

  const imagesComponent = Array.from(
    Array(imageCount),
    (_, index) => index + 1
  ).map((i) => (
    <div className="w-screen p-12">
      <img
        src={`${baseImageUrl}${i}`}
        alt={`webcomic page ${i}`}
        className="w-full h-full object-contain"
        key={i}
      />
    </div>
  ));

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        style={extraStyles}
        className="h-screen flex flex-row flex-nowrap transition duration-200 bg-red-500 transform"
      >
        {imagesComponent}
      </div>
    </div>
  );
}
