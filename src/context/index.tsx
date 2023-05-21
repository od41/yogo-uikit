import React, { ReactNode } from 'react';
import {SidebarContextProvider} from './SidebarContext';

type CombinedContextProviderProps = {
    children: ReactNode;
  };
  
export const MyContextProvider = ({ children }: CombinedContextProviderProps) => {
    return (
      <>
        <SidebarContextProvider >
          {children}
        </SidebarContextProvider>
      </>
    );
  };