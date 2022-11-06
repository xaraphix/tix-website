import React from "react";

interface PlaygroundProps {}

const Playground: React.FC<PlaygroundProps> = ({}) => {
  return (
    <>
      <section
        id='playground'
        className='md:px20 bg-background-100 px-10 pt-20  pb-8 dark:bg-surface-800 md:px-32 lg:pt-[120px] lg:pb-[70px]'
      >
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full'>
              <div className='items-center justify-between overflow-hidden lg:flex'>
                <div className='flex flex-wrap'>
                  <div className='w-full'>
                    <div className='mb-12 max-w-[620px] lg:mb-20'>
                      <span className='mb-2 block text-lg font-semibold text-primary-400 dark:text-primary-300'>
                        Playground
                      </span>
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='relative z-10 inline-block'>
                    <img
                      src='assets/images/about/about-image.svg'
                      alt='image'
                      className='mx-auto lg:ml-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Playground;
