import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import TuneIcon from '@mui/icons-material/Tune';
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__filter">
        <TuneIcon/>
        <h2>FILTER</h2>
      </div>
      <hr/>

      <ChannelRow
        image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        channel="KU vlogs"
        verified
        subs="800K"
        noOfVideos={313}
        description="Test"
      />
    </div>
  )
} 

export default SearchPage 