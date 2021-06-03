import { IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_logo'>
                <img src='https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Reno-Systems-Egypt-35232-1535282925-og.png' />
            </div>
            <div className='search'>
                <input placeholder='Quick access' type='text' />
                <SearchIcon />
            </div>
            <h4>SETTINGS</h4>
            <div className='settings'>
                <h3>
                    ATM Settings
                </h3>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
            <div className='settings'>
                <h3>
                    Business Setup
                </h3>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
            <div className='settings'>
                <h3>
                    User Management
                </h3>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
            <div className='settings'>
                <h3>License Management</h3>
            </div>
        </div >
    )
}

export default Sidebar
