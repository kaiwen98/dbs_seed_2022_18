import React from 'react';
import NavbarTemplate from './NavbarTemplate';
import { Outlet } from 'react-router';

const WithNavBar = () => {
  return (
    <>
    <NavbarTemplate />
    <Outlet />
  </>
  )
}

export default WithNavBar