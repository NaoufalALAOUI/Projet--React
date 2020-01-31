import './navbar.scss';
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  UncontrolledCollapse,
  DropdownToggle,
  NavItem,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  NavbarBrand,
  Nav,
  Container,
  Media
} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
         <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
              <Container>
              <NavbarBrand className="mr-7 ml--9" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/upshift..png")}
                />
              </NavbarBrand>
        <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Business</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        Profile
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    
                    
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About</span>
                    </DropdownToggle>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav>
                    
                    
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Pricing</span>
                    </DropdownToggle>
                    </UncontrolledDropdown>

                   
                    <UncontrolledDropdown nav>
                    
                    
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Fag</span>
                    </DropdownToggle>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav>
                    
                    
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact us</span>
                    </DropdownToggle>
                    </UncontrolledDropdown>

                   
                    <UncontrolledDropdown nav>
                    
                    
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none ml-1" />
                      <span className="nav-link-inner--text">Log In</span>
                    </DropdownToggle>
                    </UncontrolledDropdown>

            
            
            
            
            
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
               
             
                
                 
             
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <UncontrolledDropdown nav>
                    
                    
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none ml-1" />
                      <div class="button button-1 mr--9">Join now</div>
                      

                    </DropdownToggle>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
                </Container>
                </Navbar>
                </header>
      </>
    );
  }
}

export default AdminNavbar;
