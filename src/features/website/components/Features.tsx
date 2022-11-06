import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <>
      <section
        id='features'
        className='bg-background-100 dark:bg-background-900 mx-auto flex w-full flex-col  gap-10 pt-16 xl:mt-16 xl:px-5 2xl:px-32 '
      >
        <div className='card mx-auto h-[30rem] w-full bg-secondary bg-opacity-20 text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card mx-auto  h-[30rem] w-full  bg-warning bg-opacity-20 text-warning-content'>
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
