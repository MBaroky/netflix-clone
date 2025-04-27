export const movieCardSharedClasses = {
  container: 'group bg-zinc-900 col-span relative h-[12vw]',
  image: 'w-full rounded-md object-cover transition shadow-xl cursor-pointer group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 h-[12vw]',
  overlay: 'opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:-translate-x-[1.1%] group-hover:opacity-100 bg-zinc-900 rounded-md',
  overlayImage: 'w-full rounded-t-md object-cover transition duration shadow-xl cursor-pointer h-[12vw]',
  content: 'z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md',
  button: 'w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center cursor-pointer transition',
  text: 'text-white text-[10px] lg:text-sm',
};