import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import { MenuContext } from '../../contexts/MenuContext';

export function NavBar(): JSX.Element {
  const { toggleMenu } = useContext(MenuContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar
      color="light"
      light
      expand="lg"
      className="bg-transparent py-4 px-4"
    >
      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          icon={['fas', 'align-left']}
          className="mr-3"
          onClick={() => toggleMenu()}
          id="menu-toggle"
        />
        <h2 className="fs-2 m-0">Dashboard</h2>
      </div>

      <NavbarToggler onClick={toggleNavbar} className="mr-2" />

      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="ml-auto mb-2 mb-lg-0">
          <UncontrolledButtonDropdown nav inNavbar>
            <DropdownToggle nav caret className="second-text font-weight-bold">
              <FontAwesomeIcon icon={['fas', 'user']} className="mr-2" />
              Nome
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Informações</DropdownItem>
              <DropdownItem>Configurações</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
