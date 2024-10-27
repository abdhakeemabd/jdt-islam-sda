import React from 'react'
import Navbar from '../component/navbar'
import HomeBanner from '../component/home-banner'
import HomeBolg from '../component/home-bolg'
import HomeAbout from '../component/home-about'
import Funfac from '../component/funfac'
import Testimonial from '../component/testimonial'
import Footer from '../component/footer'

function Home() {
  return (
    <div>
        <Navbar/>   
        <HomeBanner/>
        <HomeBolg/>
        <HomeAbout/>
        <Funfac/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home