import "./header.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="d-flex header">
      <div className="name">
        <div className="nick-name">
          <div>
            <Link to="/">Giang Hoàng</Link>
          </div>
          <div className="full-name">
            <p> </p>--Nguyễn Hoàng Giang--
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="item div-github">
          <Link target="_blank">
  
          </Link>
        </div>
        <div className="item div-contact">
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="navbar">
        <Navbar color="faded" light>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://www.facebook.com/GiangHoang.1209/"
                >
                  Facebook
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://www.instagram.com/_hzagg._/"
                >
                  Instagram
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://twitter.com/GiangHo98131677"
                >
                  Twitter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://github.com/GiangHoang9912"
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
