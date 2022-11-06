import React from "react";

interface DownloadProps {}

const Download: React.FC<DownloadProps> = ({}) => {
  return (
    <>
      <section
        id='download'
        className='md:px20 bg-background-50 px-10 pt-20  pb-8 dark:bg-surface-900 md:px-32 lg:pt-[120px] lg:pb-[70px]'
      >
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <div className='mb-12 max-w-[620px] lg:mb-20'>
              <span className='mb-2 block text-lg font-semibold text-primary-400 dark:text-primary-300'>
                Downloads coming soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
