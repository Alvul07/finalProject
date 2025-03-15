import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import SectionOne from '../components/SectionOne';
import Swiper from '../components/SwiperText'
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import Footer from '../components/Footer';

const Home = () => {
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //     axios.get("https://90bd69b27d9ba951.mokky.dev/cars")
  //     .then((response) => {
  //         setCars(response.data)
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
  // }, []);

  return (
    <div>
      {/* <h1>Список машин</h1>
        {cars.map((item, index) => (
            <h3 className='text-[teal]' key={index}>{item.title}
            <span>Цена: {item.price}</span>
            </h3>
        ))} */}
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