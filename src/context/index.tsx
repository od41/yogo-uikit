import React, { ReactNode } from 'react';
import {SidebarContext} from './SidebarContext';

type CombinedContextProviderProps = {
    children: ReactNode;
  };
  
export const CombinedContextProvider = ({ children }: CombinedContextProviderProps) => {
    return (
      <SidebarContext>
        {/* <SidebarContext /> */}
        {children}
      </SidebarContext>
    );
  };