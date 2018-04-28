import React from "react";
import {
// Collapse,
Navbar,
// NavbarToggler,
// NavbarBrand,
// Nav,
// NavItem,
NavLink,
UncontrolledDropdown,
// Dropdown,
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
        <Navbar tabs className="navbar justify-content-center">
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
          <div className="innerNav">
            <div className="nav float-left">
              
              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
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
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  FIRE SAFETY
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="#">FIRE SAFETY IN YOUR HOME</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">FIRE SAFETY IN OUR SCHOOLS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">BURNING PERMITS & RESTRICTIONS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">CAMPFIRE SAFETY</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">CARBON MONOXIDE FAQS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">LINKS & RESOURCES</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  NEWS & EVENTS
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="#">SMFD ON FACEBOOK</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">EVENTS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">ST. MICHAEL DAZE & KNIGHTS</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <div className="nav float-right">
              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  ABOUT
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="#">ABOUT SMFD</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">HISTORY</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">APPARATUS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">RETIRED FIREFIGHTERS</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  FIREFIGHTERS & EMTS
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="#">MEET YOUR OFFICERS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">FIRE DEPARTMENT ROSTER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">MEDICAL RESPONDER ROSTER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">MEETING & TRAINING SCHEDULE</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  EXPLORERS
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="#">ABOUT THE EXPLORERS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">EXPLORER ROSTER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">TRAINING SCHEDULE</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">EVENTS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">HOW TO JOIN</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          {/* </Collapse> */}
          </div>
        </Navbar>
      </div>
    );
  }
}