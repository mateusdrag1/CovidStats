import { createContext } from 'react';

type MenuContextData = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const MenuContext = createContext({} as MenuContextData);
