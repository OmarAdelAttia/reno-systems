import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <IconButton>
                    <ArrowBackIosIcon />
                    <MenuIcon />
                </IconButton>
                <h3>Hello, Talent Acquisition</h3>
            </div>
            <div className="header_right">
                <IconButton>
                    <HelpIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <h3>| Talent Acquisition</h3>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
