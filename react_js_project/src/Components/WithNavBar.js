import React from 'react';
import NavbarTemplate from './NavbarTemplate';
import { Outlet } from 'react-router';

const WithNavBar = () => {
  return (
    <>
    <div className="backgroundColorDiv"></div>
    <NavbarTemplate />
    <Outlet />
  </>
  )
}

export default WithNavBar