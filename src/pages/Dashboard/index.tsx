import React, { useState } from 'react';
import { Main } from '../../components/Main';
import { Sidebar } from '../../components/Sidebar';
import { MenuContext } from '../../contexts/MenuContext';

export default function Dashboard(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      <div className={`d-flex` + (isOpen ? ' toggled' : ' ')} id="wrapper">
        <Sidebar />
        <Main />
      </div>
    </MenuContext.Provider>
  );
}
