import React from 'react';
import Avatar from '@mui/material/Avatar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import avatar from "../../assets/profile-picture.jpg"
import "./Header.scss"

function Header() {
  return (
    <div className='header-container'>
      <label className='header-left'>
         <SearchOutlinedIcon className='search-icon'/>
        <input placeholder='Type to search...' />
      </label>
      <div className='header-right'>
        <SettingsOutlinedIcon className='header-right-icon'/>
        <LabelOutlinedIcon className='header-right-icon'/>
        <NotificationsOutlinedIcon className='header-right-icon'/>
        <p className='profile-name'>Thomas Brown <br /> <span>Developer</span></p>
        <Avatar alt="profile-pic" src={avatar} className='profile-picture'/>
        <ExpandMoreIcon className='header-right-icon'/>
      </div>
    </div>
  )
}

export default Header