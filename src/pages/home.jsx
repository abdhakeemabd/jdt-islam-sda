import React from 'react'
import Navbar from '../component/navbar'
import HomeBanner from '../component/home-banner'
import HomeBolg from '../component/home-bolg'

function Home() {
  return (
    <div>
        <Navbar/>   
        <HomeBanner/>
        <HomeBolg/>
    </div>
  )
}

export default Home