import { FC } from "react";
import { Footer } from "../layouts/Footer";
import { Navigation } from "../layouts/Navigation";
interface ILandingPageProps {}

export const LandingPage: FC<ILandingPageProps> = (props) => {
  return (
    <>
      <div className='w-full px-6'>
        <div className='mt-8 relative container mx-auto flex flex-col items-center  mb-24 sm:mb-32 md:mb-48 lg:mb-56 xl:mb-64 bg-surface-dark rounded-3xl'>
          <div className='w-full flex flex-col h-full items-center justify-center px-10'>
            {" "}
            <img src='dawki.svg' className='md:w-1/2' />
            <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-on-surface-light md:text-4xl lg:text-5xl'>
              <span className='underline underline-offset-3 decoration-8 decoration-primary-400'>
                Easily Manage
              </span>{" "}
              local/remote docker containers
            </h1>
            <p className='text-lg font-normal text-on-surface-200 lg:text-xl'>
              Conviniently speed up your app development, and leave docker
              container management to dawki.
            </p>
          </div>
          <div className='flex justify-center items-center mt-10 mb-10 sm:mb-20'>
            <button
              type='button'
              className='text-primary-200 bg-primary-900 hover:bg-secondary-700 focus:outline-none focus:ring-0 font-black rounded-lg text-2xl px-5 py-2.5 text-center mr-3 md:mr-0'
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
