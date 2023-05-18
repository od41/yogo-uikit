import React, { createContext, useState, ReactNode } from 'react';

type sidebarContextProps = {
  leftSidebar: boolean;
  rightSidebar: boolean;
};

type SidebarContextValue = [
  sidebarContextProps, 
  React.Dispatch<React.SetStateAction<sidebarContextProps>>
];

const initialState: sidebarContextProps = {
  leftSidebar: true,
  rightSidebar: false
};

export const SidebarContext = createContext<SidebarContextValue>([
  initialState,
  () => {}
]);

type SidebarContextProviderProps = {
  children: ReactNode;
};

export const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [state, setState] = useState<sidebarContextProps>(initialState);

  return (
    <SidebarContext.Provider value={[state, setState]} >
      {children}
    </SidebarContext.Provider>
  );
};
