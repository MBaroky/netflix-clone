export const infoModalSharedClasses = {
  container: `
    z-50 transition duration-300 bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center overflow-y-auto overflow-x-hidden inset-0
  `,
  modalWrapper: `
    relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden min-w-[80%]
  `,
  modalContent: `
    transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md
  `,
  videoWrapper: `
    relative h-96
  `,
  video: `
    w-full h-full brightness-[60%] object-cover
  `,
  closeButton: `
    absolute right-3 top-3 w-10 h-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center p-4
  `,
  titleWrapper: `
    absolute bottom-[10%] left-10
  `,
  title: `
    text-white text-3xl md:text-3xl lg:text-5xl h-full font-bold mb-8
  `,
  buttonWrapper: `
    flex flex-row gap-4 items-center
  `,
  contentWrapper: `
    px-12 py-8
  `,
  label: `
    text-green-400 font-semibold text-lg
  `,
  text: `
    text-white text-lg
  `,
};