import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';
import './Header.css';

const header = props => {
  return (
    <div className='header'>
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'></img>
      </div>
      <div className="header__input">
        <input type="text" placeholder='Search' />
        <SearchIcon className='header__inputButton' />
      </div>

      <div className="header__icons">
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <FaceIcon />
      </div>

    </div>
  )
}

header.propTypes = {}

export default header