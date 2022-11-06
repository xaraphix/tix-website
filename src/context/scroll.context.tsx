import { createContext } from 'react';

const ScrollContext = createContext({
  viewAtTop: false,
  setViewAtTop: (val: boolean) => {},
});

export const ScrollContextProvider = ScrollContext.Provider;
export default ScrollContext;
