import React from "react";
import {
// Collapse,
// Navbar,
// NavbarToggler,
// NavbarBrand,
Nav,
// NavItem,
<<<<<<< HEAD
// NavLink,
UncontrolledDropdown,
=======
NavLink,
// UncontrolledDropdown,
Dropdown,
>>>>>>> working on stylig the nav. not there yet, though
DropdownToggle,
DropdownMenu,
DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return(
      <div>
        <Nav tabs>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
          <div className="innverNav">
            <Nav className="nav float-left" navbar>
              
              <Dropdown nav className="community" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav className="dropdown-item">
                  COMMUNITY
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="#">CAR SEAT CHECKS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">SEVERE WEATHER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">RECREATIONAL FIRES</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">JOINING THE SMFD</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>

              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                  FIRE SAFETY
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      FIRE SAFETY IN YOUR HOME
                    </DropdownItem>
                    <DropdownItem>
                      FIRE SAFETY IN OUR SCHOOLS
                    </DropdownItem>
                    <DropdownItem>
                      BURNING PERMITS & RESTRICTIONS
                    </DropdownItem>
                    <DropdownItem>
                      CAMPFIRE SAFETY
                    </DropdownItem>
                    <DropdownItem>
                      CARBON MONOXIDE FAQS
                    </DropdownItem>
                    <DropdownItem>
                      LINKS & RESOURCES
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>

              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                  NEWS & EVENTS
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      SMFD ON FACEBOOK
                    </DropdownItem>
                    <DropdownItem>
                      EVENTS
                    </DropdownItem>
                    <DropdownItem>
                      ST. MICHAEL DAZE & KNIGHTS
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </Nav>

            <Nav className="nav float-left" navbar>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                  ABOUT
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      ABOUT SMFD
                    </DropdownItem>
                    <DropdownItem>
                      HISTORY
                    </DropdownItem>
                    <DropdownItem>
                      APPARATUS
                    </DropdownItem>
                    <DropdownItem>
                      RETIRED FIREFIGHTERS
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>

              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                  FIREFIGHTERS & EMTS
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      MEET YOUR OFFICERS
                    </DropdownItem>
                    <DropdownItem>
                      FIRE DEPARTMENT ROSTER
                    </DropdownItem>
                    <DropdownItem>
                      MEDICAL RESPONDER ROSTER
                    </DropdownItem>
                    <DropdownItem>
                      MEETING & TRAINING SCHEDULE
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>

              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                  EXPLORERS
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      ABOUT THE EXPLORERS
                    </DropdownItem>
                    <DropdownItem>
                      EXPLORER ROSTER
                    </DropdownItem>
                    <DropdownItem>
                      TRAINING SCHEDULE
                    </DropdownItem>
                    <DropdownItem>
                      EVENTS
                    </DropdownItem>
                    <DropdownItem>
                      HOW TO JOIN
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </Nav>
          {/* </Collapse> */}
          </div>
        </Nav>
      </div>
    );
  }
}