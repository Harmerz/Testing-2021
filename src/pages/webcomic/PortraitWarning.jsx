export default function PortraitWarning() {
  return (
    <>
      <div className="hidden portrait:flex w-screen h-screen bg-gray-500 opacity-75 top-0 left-0 fixed z-40" />
      <div className="hidden portrait:flex flex-col justify-center items-center rounded-lg shadow-lg fixed bg-white p-6 w-4/5 sm:w-3/5 space-y-4 transform -translate-x-2/4 -translate-y-2/4 top-1/2 left-1/2 z-50 text-brand-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
        <div className="text-center">
          ATUR ORIENTASI PERANGKAT MENJADI LANDSCAPE UNTUK PENGALAMAN MEMBACA
          YANG LEBIH BAIK
        </div>
      </div>
    </>
  );
}
