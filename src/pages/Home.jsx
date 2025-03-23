import React from 'react'
import Header from '../components/Header';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div>
      <div className='flex justify-end'>
        <div className='bg-[#F1EADC] w-[620px] h-[826px] absolute top-0'></div>
      </div>
      <div>
        <Header />
      <SectionOne />
      </div>
      <div>
        <SectionTwo/>
      </div>
      <div>
        <SectionThree/>
      </div>
      <div>
        <SectionFour/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;