import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import { Menu,Close,AccountCircle } from '@mui/icons-material';
import './Navbar.css'
import logo from "./Assets/Logo2.png"


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)
  return (
      <div>
          <div className="navbar">
              <Link to="#" className="menu-bars">
                  <Menu className='IconsSide' onClick={showSidebar}/>
              </Link>
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>

              <Link to="/User" className='Link'>
                <div className="userProfile">
                <h5 className='NameProfile'>Ahmad</h5>
                    <AccountCircle className='Profile'/>
                </div>
              </Link>  
          </div>
           

          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className='navbar-toggle'>
                      <Link to="#" className="menu-bars">
                          <Close className='IconsSide'/>
                      </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                      return (
                          <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                  {item.icon}
                                  <span className="titleItems">{item.title}</span>
                              </Link>
                        </li>
                    )
                })}
            </ul>
          </div>
    </div>
  )
}
