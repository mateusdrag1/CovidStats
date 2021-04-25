import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export function Sidebar(): JSX.Element {
  return (
    <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
        <span className="font-weight-bolder">CovidStats</span>
      </div>
      <ListGroup flush className="my-3">
        <ListGroupItem tag="a" href="#" action active>
          <FontAwesomeIcon icon={['fas', 'tachometer-alt']} className="mr-3" />
          Dashboard
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action color="danger">
          <FontAwesomeIcon icon={['fas', 'power-off']} className="mr-3" />
          Sair
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
