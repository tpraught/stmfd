import React from "react";
import {
// Collapse,
Navbar,
// NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    }
    toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    }
    render() {
    return(
      <div>
        <Navbar>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  COMMUNITY
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      CAR SEAT CHECKS
                    </DropdownItem>
                    <DropdownItem>
                      SEVERE WEATHER
                    </DropdownItem>
                    <DropdownItem>
                      RECREATIONAL FIRES
                    </DropdownItem>
                    <DropdownItem>
                      JOINING THE SMFD
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    );
  }
}