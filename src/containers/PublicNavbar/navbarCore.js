import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions, jobActions } from "../../redux/actions";
import SearchItem from "../../components/SearchFunction";

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
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";

const NavbarCore = () => {
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setQuery(searchInput);
    // dispatch(blogActions.blogsRequest(1));
  };

  useEffect(() => {
    dispatch(jobActions.getJobs(pageNum, 10, query));
  }, [dispatch, pageNum, query]);

  const authLink = (
    <>
      <CNavLink to="/profile">Profile</CNavLink>
      <CNavLink to="/login" onClick={handleLogout}>
        Logout
      </CNavLink>
    </>
  );

  const publicLink = <CNavLink to="/login">Login</CNavLink>;

  return (
    <div>
      <CNavbar expandable="sm" color="info">
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        <CNavbarBrand>Teach Saigon</CNavbarBrand>
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink to="/">Home</CNavLink>
            {!loading && <>{isAuthenticated ? authLink : publicLink}</>}
          </CNavbarNav>
          <CNavbarNav className="ml-auto">
            <CForm inline>
              <SearchItem
                searchInput={searchInput}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmitSearch}
                loading={loading}
              />
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
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </div>
  );
};

export default NavbarCore;
