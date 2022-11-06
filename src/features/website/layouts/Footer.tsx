import { FC, useContext } from "react";
import { themeModes } from "../../../constant/app.constant";
import ThemeContext from "../../../context/Theme.content";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
interface IFooterProps {}

export const Footer: FC<IFooterProps> = (props) => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  return (
    <>
      <footer className='footer mt-32 flex flex-col gap-16 border-t border-neutral-content bg-base-200 p-10 text-base-content xl:flex-row xl:px-5 2xl:mt-16  2xl:px-32'>
        <div>
          <span className='footer-title'>About the developer</span>
          <a className='link-hover link'>Website</a>
          <a className='link-hover link'>Posts</a>
          <a className='link-hover link'>Twitter</a>
          <a className='link-hover link'>LinkedIn</a>
          <a className='link-hover link'>Github</a>
        </div>
        <div>
          <span className='footer-title'>More Projects</span>
          <ul className='flex flex-wrap items-center gap-16'>
            <li>
              <a
                href='https://tailgrids.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/bluecco.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://ayroui.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/cridux.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://graygrids.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/fincal.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://lineicons.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/finix.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://uideck.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/fitr.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://uideck.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/habgo.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://uideck.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/jambox.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://uideck.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/nftix.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://uideck.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/notix.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://uideck.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/tix.svg' alt='tailgrids' />
              </a>
            </li>
            <li>
              <a
                href='https://uideck.com'
                rel='nofollow noopner'
                target='_blank'
                className='mb-6 mr-5 block max-w-[120px] xl:max-w-[100px] 2xl:max-w-[120px]'
              >
                <img src='projects/xafku.svg' alt='tailgrids' />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <footer className='footer flex flex-row border-t border-base-300 bg-base-200 px-8 py-4 text-base-content xl:px-5 2xl:px-32'>
        <div className='grid-flow-col items-center'>
          <a href='' className='inline-block max-w-[160px]'>
            {themeMode === themeModes.DARK_THEME_MODE ? (
              <img src='dawkilogo.svg' />
            ) : (
              <img src='dawkilogo-dark.svg' />
            )}
          </a>
        </div>
        <div className='ml-auto md:place-self-center'>
          <div className='flex items-center justify-center'>
            <a href=''>
              <LinkedInIcon className='mx-2 flex !h-6 !w-6 items-center justify-center text-neutral  hover:text-neutral-focus' />
            </a>
            <a href=''>
              <GitHubIcon className='mx-2 flex !h-6 !w-6 items-center justify-center text-neutral  hover:text-neutral-focus' />
            </a>
            <a href=''>
              <TwitterIcon className='mx-2 flex !h-6 !w-6 items-center justify-center text-neutral hover:text-neutral-focus' />
            </a>
          </div>
          <div className='my-1 flex flex-col justify-center md:justify-end'>
            <p className='text-xs text-neutral'>
              Logos by{" "}
              <a
                href='https://tailgrids.com'
                rel='nofollow noopner'
                target='_blank'
                className='text-primary hover:underline'
              >
                Logo.com
              </a>
            </p>
            <p className='text-xs text-neutral'>
              Illustrations from{" "}
              <a
                href='https://storyset.com'
                rel='nofollow noopner'
                target='_blank'
                className='text-primary hover:underline'
              >
                Storysets
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
