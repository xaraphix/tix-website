import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
interface ContactByProps {}

const Contact: React.FC<ContactByProps> = ({}) => {
  return (
    <>
      <section
        id='reachout'
        className='bg-background-100 dark:bg-background-900 mx-auto flex w-full flex-col  gap-10 pt-16 xl:mt-16 xl:px-5 2xl:px-32 '
      >
        <div className='-mx-4 flex flex-wrap justify-center'>
          <div className='w-full px-4'>
            <div className='wow fadeInUp mb-10' data-wow-delay='.1s'>
              <div className='text-center'>
                <div className='mt-20 flex h-[38rem] max-h-[50rem] min-h-[38rem] w-full grow items-center justify-center md:h-[33rem] md:min-h-[33rem] lg:h-[33rem] lg:min-h-[33rem]'>
                  <div className='relative h-full w-full overflow-hidden rounded-xl bg-blend-darken drop-shadow-[0_35px_35px_rgba(0,0,200,0.25)]  md:rounded-3xl'>
                    <img
                      src='aboutme.jpg'
                      alt=''
                      className='absolute inset-0 h-full w-full
         object-cover object-center opacity-100'
                    />
                    <div
                      className='absolute flex h-full w-full flex-col items-center
       justify-center gap-10 bg-primary bg-opacity-80 px-7 py-8 md:px-10'
                    >
                      <span className='text-wrap mt-5 w-full text-2xl font-bold text-primary-content md:text-4xl'>
                        About the developer
                      </span>
                      <span className='text-wrap mt-5 w-full text-lg font-bold text-primary-content'>
                        Suyash is a Senior Fullstack Software Engineer with 7
                        years of experience in the Finance Industry.
                      </span>
                      <div className='text-space text-wrap mt-2 w-full text-lg font-bold text-primary-content '>
                        He enjoys building{" "}
                        <span className='font-semibold underline'>
                          distributed systems
                        </span>{" "}
                        with{" "}
                        <span className='font-semibold underline'>
                          delightful intuitive frontends
                        </span>
                        . Check his{" "}
                        <a
                          target='_blank'
                          href='https://suyashsingh.in/projects/'
                          className='underline'
                        >
                          portfolio
                        </a>{" "}
                        &{" "}
                        <a
                          target='_blank'
                          href='https://suyashsingh.in/posts/'
                          className='underline'
                        >
                          posts
                        </a>{" "}
                        to know more about him.
                      </div>
                      <div className='flex select-none flex-col  items-center justify-center gap-10 md:flex-row '>
                        <div className='flex items-center justify-center'>
                          <a href='https://www.linkedin.com/in/suyashsinghin/'>
                            <LinkedInIcon className='mx-2 flex !h-12 !w-12 items-center justify-center text-primary-content hover:text-neutral-focus' />
                          </a>
                          <a href='https://github.com/xaraphix'>
                            <GitHubIcon className='mx-2 flex !h-12 !w-12 items-center justify-center text-primary-content hover:text-neutral-focus' />
                          </a>
                          <a href='https://twitter.com/_SuyashSingh'>
                            <TwitterIcon className='mx-2 flex !h-12 !w-12 items-center justify-center text-primary-content hover:text-neutral-focus' />
                          </a>
                        </div>
                      </div>
                    </div>
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

export default Contact;
