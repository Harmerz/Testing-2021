import { useState } from 'react';
import NavigationButton from './NavigationButton';
import Comic from './Comic';
import Timer from './Timer';
import PortraitWarning from './PortraitWarning';

export default function Webcomic() {
  const [openedPage, setOpenedPage] = useState(0); // begin from 0
  const [passedPage, setPassedPage] = useState(-1);
  const imageCount = 10; // 0 to 9

  return (
    <div className="flex relative">
      <NavigationButton
        openedPage={openedPage}
        setOpenedPage={setOpenedPage}
        imageCount={imageCount}
        prev
      />
      <NavigationButton
        openedPage={openedPage}
        setOpenedPage={setOpenedPage}
        imageCount={imageCount}
        passedPage={passedPage}
        next
      />
      <Comic openedPage={openedPage} imageCount={imageCount} />
      <Timer
        openedPage={openedPage}
        passedPage={passedPage}
        setPassedPage={setPassedPage}
      />
      <PortraitWarning />
    </div>
  );
}
