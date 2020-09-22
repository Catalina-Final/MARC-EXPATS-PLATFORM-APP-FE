import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/actions";

import {
  CNavbarNav,
  CNavbar,
  CToggler,
  CNavbarBrand,
  CDropdown,
  CCollapse,
  CDropdownMenu,
  CNavLink,
  CForm,
  CInput,
  CButton,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";

const NavbarCore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const authLink = <CNavLink onClick={handleLogout}>Logout</CNavLink>;

  const publicLink = <CNavLink to="/login">Login</CNavLink>;

  return (
    <div>
      <CNavbar expandable="sm" color="info">
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        <CNavbarBrand>Teach Saigon</CNavbarBrand>
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink>Home</CNavLink>
            {!loading && <>{isAuthenticated ? authLink : publicLink}</>}
          </CNavbarNav>
          <CNavbarNav className="ml-auto">
            <CForm inline>
              <CInput className="mr-sm-2" placeholder="Search" size="sm" />
              <CButton color="light" className="my-2 my-sm-0" type="submit">
                Search
              </CButton>
            </CForm>
            <CDropdown inNav>
              <CDropdownToggle color="primary">EN</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>EN</CDropdownItem>
                <CDropdownItem>ES</CDropdownItem>
                <CDropdownItem>RU</CDropdownItem>
                <CDropdownItem>FA</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown inNav>
              <CDropdownToggle color="primary">User</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Account</CDropdownItem>
                <CDropdownItem>Settings</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </div>
  );
};

export default NavbarCore;
