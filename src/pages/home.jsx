import React from 'react'
import Navbar from '../component/navbar'
import HomeBanner from '../component/home-banner'
import HomeBolg from '../component/home-bolg'
import HomeAbout from '../component/home-about'

function Home() {
  return (
    <div>
        <Navbar/>   
        <HomeBanner/>
        <HomeBolg/>
        <HomeAbout/>
    </div>
  )
}

export default Home