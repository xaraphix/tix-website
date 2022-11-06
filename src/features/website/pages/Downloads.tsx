import { FC } from "react";
interface IDownloadsProps {}

export const Downloads: FC<IDownloadsProps> = (props) => {
  return (
    <>
      <div className='w-full flex flex-col h-full pt-10 px-52'>
        {" "}
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white'>
          <span className='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>
            Downloads
          </span>{" "}
        </h1>
        To be added soon
      </div>
    </>
  );
};
