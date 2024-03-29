import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Section2 from './homeComponents/Section_2/Section2.jsx'
import Section3 from './homeComponents/Section_3/Section3.jsx'
import Section4 from './homeComponents/Section_4/Section4.jsx'
import Section6 from './homeComponents/Section_6/Section6.jsx'
import Section7 from './homeComponents/Section_7/Section7.jsx'
import Section5 from './homeComponents/Section_5/Section5.jsx'

const Home = () => {
  return (
    <>
    <Navbar/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>

    </>
    
  )
}

export default Home