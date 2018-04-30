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
        <Navbar className="navbar justify-content-center">
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
                      <NavLink href="/CarSeatChecks">CAR SEAT CHECKS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/SevereWeather ">SEVERE WEATHER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/RecFires">RECREATIONAL FIRES</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/Kids">FOR THE KIDS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/JoinSMFD">JOINING THE SMFD</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  FIRE SAFETY
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="/HomeSafety">FIRE SAFETY IN YOUR HOME</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/SchoolSafety">FIRE SAFETY IN OUR SCHOOLS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/Burning">BURNING PERMITS & RESTRICTIONS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/CampfireSafety">CAMPFIRE SAFETY</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/CoFAQs">CARBON MONOXIDE FAQS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/LinksResources">LINKS & RESOURCES</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  NEWS & EVENTS
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="https://www.facebook.com/stmichaelfire/" target="_blank">SMFD ON FACEBOOK</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/Events">EVENTS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="http://www.stmdazeandknightsfestival.com/" target="_blank">ST. MICHAEL DAZE & KNIGHTS</NavLink>
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
                      <NavLink href="/About">ABOUT SMFD</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/History">HISTORY</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/Apparatus">APPARATUS</NavLink>
                    </DropdownItem>
                    {/* <DropdownItem>
                      <NavLink href="/">RETIRED FIREFIGHTERS</NavLink>
                    </DropdownItem> */}
                  </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  FIREFIGHTERS & EMTS
                </DropdownToggle>
                  <DropdownMenu>
                    {/* <DropdownItem>
                      <NavLink href="/">MEET YOUR OFFICERS</NavLink>
                    </DropdownItem> */}
                    <DropdownItem>
                      <NavLink href="/Roster">FIREFIGHTER ROSTER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/MedicalRoster">MEDICAL RESPONDER ROSTER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/Schedule">MEETING & TRAINING SCHEDULE</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown>
                <DropdownToggle className="nav-item">
                  EXPLORERS
                </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href="/ExplorerAbout">ABOUT THE EXPLORERS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/ExplorerRoster">EXPLORER ROSTER</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/ExplorerSchedule">TRAINING SCHEDULE</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/ExplorerEvents">EVENTS</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/JoinExplorers">HOW TO JOIN</NavLink>
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