import React, { useContext } from "react";
import { themeModes } from "../../../constant/app.constant";
import ThemeContext from "../../../context/Theme.content";
interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <>
      <div
        id='home'
        className='-mt-10 flex h-screen w-full flex-col items-center justify-center gap-5 lg:-mt-36 xl:-mt-32 '
      >
        <div className='card mt-auto w-3/4 pt-[200px] lg:pt-0 lg:card-side'>
          <div className='flex flex-col justify-center gap-10'>
            <h1 className='text-neutral-dark text-8xl font-extralight'>
              DAWKI
            </h1>
            <h2 className='text-neutral-dark py-1 text-3xl font-medium'>
              Easily Manage local/remote docker containers
            </h2>
            <p className='text-neutral-dark grow-0'>
              Conviniently speed up your app development, and leave docker
              container management to dawki.
            </p>
            <div className='flex gap-5'>
              <button className='btn-primary btn'>Demo</button>
              <button className='btn-primary btn bg-opacity-0 text-primary hover:bg-opacity-100 hover:text-primary-content'>
                Download
              </button>
            </div>
          </div>
          <img
            src={`dawki-illustration${
              themeMode === themeModes.LIGHT_THEME_MODE ? ".svg" : "-dark.svg"
            }`}
            className='max-w-lg xl:max-w-3xl'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
