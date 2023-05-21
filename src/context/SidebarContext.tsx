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
  rightSidebar: true
};

export const SidebarContext = createContext<SidebarContextValue>([
  initialState,
  () => {}
]);

type SidebarContextProviderProps = {
  children: ReactNode;
};

export const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [sidebarState, setSidebarState] = useState<sidebarContextProps>(initialState);

  return (
    <SidebarContext.Provider value={[sidebarState, setSidebarState]} >
      {children}
    </SidebarContext.Provider>
  );
};
