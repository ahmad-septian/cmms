import React, { useState } from 'react'
import {Article, AddLocationAlt, PrecisionManufacturing, Settings,Logout} from '@mui/icons-material';

export const SidebarData = [
    {
        title: 'CMMS',
        path: '/',    
        icon: <Article />,
        cName : 'nav-text'
    },
    {
        title: 'Area',
        path: '/Area',    
        icon: <AddLocationAlt />,
        cName : 'nav-text'
    },
    {
        title: 'Equipment Management',
        path: '/Equipment',    
        icon: <PrecisionManufacturing />,
        cName : 'nav-text'
    },
    {
        title: 'Setting',
        path: '/Setting',    
        icon: <Settings />,
        cName : 'nav-text'
    },
    {
        title: 'Logout',
        path: '/Login',    
        icon: <Logout/>,
        cName : 'nav-text'
    },
]