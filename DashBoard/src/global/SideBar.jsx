// import React from 'react'
import "../index.css";
import { useState } from "react";

import {TfiDashboard, TfiLocationPin } from "react-icons/tfi";
import {RiFilePaperLine, RiUserLine } from "react-icons/Ri";
import {  MdOutlineInventory, MdOutlineSpatialTracking } from "react-icons/Md";
import { SiOsgeo } from "react-icons/Si";
import { AiOutlineTransaction } from "react-icons/Ai";
import {IoMenuSharp} from 'react-icons/io5'

import { NavLink } from "react-router-dom"

const SideBar = () => {
  
  const [navCollapse, setNavCollapse] = useState(false);

  const Collapsed = () => {
    setNavCollapse(!navCollapse)
  }

  return (
    <>
    <section className={'MenuList ${ navCollapse ? "navCollapse" : "" }'}>
      <div className="header">
        <h4 className="headerText">Facilities Management</h4>
        <span><IoMenuSharp onClick={ Collapsed} className="menuIcon"/></span>
      </div>
    <ul className="ListItems">
    <li>
      <NavLink exact activeClassName="active" to="/dashboard">
      <TfiDashboard className='sideBarIcon'/><span className="space">Dashboard</span>
      </NavLink>
    </li>
    <li>
    <NavLink activeClassName="active" to="/facility">
      <RiFilePaperLine className='sideBarIcon'/><span className="space">Facility</span>
      </NavLink>
    </li>
    <li>
    <NavLink activeClassName="active" to="/siteConfig">
      <TfiLocationPin className='sideBarIcon'/><span className="space">Site Configuration</span>
      </NavLink>
    </li>
    <li>
    <NavLink activeClassName="active" to="/EmployeeConfiguration">
      <RiUserLine className='sideBarIcon'/><span className="space">Employees Configuration</span>
      </NavLink>
    </li>
    <li>
    <NavLink activeClassName="active" to="/inventory">
      <MdOutlineInventory className='sideBarIcon'/><span className="space">Inventory</span>
      </NavLink>
    </li>
    <li>
    <NavLink activeClassName="active" to="/siteInspection">
      <SiOsgeo className='sideBarIcon'/><span className="space">Site Inspection</span>
      </NavLink>
    </li>
    <li><NavLink activeClassName="active" to="/incidentTrack">
      <MdOutlineSpatialTracking className='sideBarIcon'/><span className="space">Incident Tracking</span>
      </NavLink></li>
    <li><NavLink activeClassName="active" to="/expenses">
      <AiOutlineTransaction className='sideBarIcon'/><span className="space">Expenses</span>
      </NavLink></li>
    </ul>
    </section>
    </>
  )
}

export default SideBar