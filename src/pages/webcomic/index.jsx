import { useState } from 'react';
import NavigationButton from './NavigationButton';
import Comic from './Comic';
import Timer from './Timer';
import PortraitWarning from './PortraitWarning';

export default function Webcomic() {
  const [imageCount] = useState(10); // 0 to 9
  const [openedPage, setOpenedPage] = useState(0); // begin from 0
  const [progresses, setProgresses] = useState(
    Object.fromEntries(
      Array.from(Array(imageCount), (_, index) => index).map((i) => [i, 0])
    )
  );

  return (
    <div className="webcomic relative w-screen h-screen text-brand-dark">
      <img
        src="https://ik.imagekit.io/lutfiandri/webcomic-kesatria/background"
        alt="background"
        className="w-full h-full object-cover object-right-bottom fixed"
      />
      <div className="px-4 md:px-8 lg:px-12 py-4 lg:py-8 h-full flex flex-col object-container z-20">
        <div className="text-center mb-2 hidden lg:block">
          <h1 className="font-medium text-4xl">WEBCOMIC: MENTAL HEALTH</h1>
        </div>
        <div className="flex-grow flex flex-row">
          <div className="grid place-items-center">
            <NavigationButton
              openedPage={openedPage}
              setOpenedPage={setOpenedPage}
              imageCount={imageCount}
              prev
            />
          </div>
          <div className="flex-grow flex flex-col mx-4 shadow-lg">
            <div style={{ background: '#FAFAFA' }}>
              <Timer
                openedPage={openedPage}
                progresses={progresses}
                setProgresses={setProgresses}
              />
            </div>
            <div
              className="flex-grow p-2 md:p-4"
              style={{ background: '#FAFAFA' }}
            >
              <Comic openedPage={openedPage} imageCount={imageCount} />
            </div>
          </div>
          <div className="grid place-items-center">
            <NavigationButton
              openedPage={openedPage}
              setOpenedPage={setOpenedPage}
              imageCount={imageCount}
              progress={progresses[openedPage]}
              next
            />
          </div>
        </div>
        <div className="mt-2 text-center text-xl hidden lg:block">
          PAGE {openedPage + 1}/10
        </div>
      </div>
      <PortraitWarning />
    </div>
  );
}
