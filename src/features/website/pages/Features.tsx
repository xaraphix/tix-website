import { FC } from "react";
interface IFeaturesProps {}

export const Features: FC<IFeaturesProps> = (props) => {
  return (
    <>
      <div className='w-full flex flex-col h-full pt-10 px-52'>
        {" "}
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white'>
          <span className='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>
            Features
          </span>{" "}
        </h1>
        <h1 className='mt-5 text-2xl font-medium tracking-tight leading-none text-gray-400 md:text-4xl lg:text-5xl dark:text-white'>
          <span>v0.1</span>{" "}
        </h1>
      </div>
    </>
  );
};
