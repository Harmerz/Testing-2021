import { useState } from 'react';
import NavigationButton from './NavigationButton';
import Comic from './Comic';

export default function Webcomic() {
  const [openedPage, setOpenedPage] = useState(0); // begin from 0
  const imageCount = 10;

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
        next
      />
      <Comic openedPage={openedPage} imageCount={imageCount} />
    </div>
  );
}
