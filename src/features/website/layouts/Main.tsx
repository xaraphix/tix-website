import React, { FC, useCallback, useContext, useEffect, useRef } from "react";
import Download from "../components/Download";
import Features from "../components/Features";
import Home from "../components/Home";
import Playground from "../components/Playground";
import Contact from "../components/Team";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

import ScrollContext from "../../../context/scroll.context";

interface IMainProps {}

export const Main: FC<IMainProps> = React.memo((props) => {
  const { setViewAtTop } = useContext(ScrollContext);
  const ref = useRef<HTMLDivElement>(null);
  // The scroll listener
  const handleScroll = useCallback(() => {
    if (ref.current && ref.current.scrollTop == 0) {
      setViewAtTop(true);
    } else {
      setViewAtTop(false);
    }
  }, []);

  useEffect(() => {
    const div = ref.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div
      className='max-w-screen max-h-screen overflow-auto overflow-x-hidden bg-base-100'
      ref={ref}
      id='maincontainer'
    >
      <Navigation />

      <Home />
      <Playground />
      <Download />
      <Contact />

      <Footer />
      <a
        href=''
        className='back-to-top hover:bg-dark fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out'
      >
        <span className='mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white'></span>
      </a>
    </div>
  );
});
