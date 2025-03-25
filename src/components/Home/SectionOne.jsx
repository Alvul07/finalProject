import React from 'react'
import bigImg from '../../assets/BigImg.jpeg'
import img2 from '../../assets/Img2.jpg'
import img3 from '../../assets/Img3.jpg.webp'
import GreenBtn from '../Btns/GreenBtn'
import Arrow from '../../assets/arrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'

const SectionOne = () => {

  return (
    <section className='max-w-[1370px] mx-auto flex justify-between'>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper w-[700px] ml-0!">
        <SwiperSlide>
          <h1 className='font-[500] text-[55px] w-[650px] leading-[60.5px] mt-[186px] mb-[45px]'>Новые поступления
            в этом сезоне</h1>
          <div className='flex flex-col items-end w-[400px]'>
            <div className='flex w-[365px]'>
              <p className='text-[20px] text-end'>Утонченные сочетания и бархатные
                оттенки - вот то, что вы искали в этом
                сезоне. Время исследовать.</p>
            </div>
            <div className='flex ml-[130px] mt-[52px] '>
              <button className='size-[67px] bg-[#6E9C9F1A] flex items-center justify-center'>
                <img src={Arrow} alt="" />
              </button>
              <Link to='/shop'><GreenBtn className='w-[243px]'>Открыть магазин</GreenBtn></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className='font-[500] text-[55px] w-[650px] leading-[60.5px] mt-[186px] mb-[45px]'>Что-то новенькое. Мы заждались тебя.</h1>
          <div className='flex flex-col items-end w-[400px]'>
            <div className='flex w-[365px]'>
              <p className='text-[20px] text-end'>Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с ReWear!</p>
            </div>
            <div className='flex ml-[130px] mt-[52px] '>
              <button className='size-[67px] bg-[#6E9C9F1A] flex items-center justify-center'>
                <img src={Arrow} alt="" />
              </button>
              <Link to='/shop'><GreenBtn className='w-[243px]'>Открыть магазин</GreenBtn></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-[170px]'>
          <h1 className='font-[500] text-[55px] w-[650px] leading-[60.5px] mt-[186px] mb-[45px]'>Включай новый сезон с ReWear</h1>
          <div className='flex flex-col items-end w-[400px]'>
            <div className='flex w-[365px]'>
              <p className='text-[20px] text-end'>Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</p>
            </div>
            <div className='flex ml-[130px] mt-[52px] '>
              <button className='size-[67px] bg-[#6E9C9F1A] flex items-center justify-center'>
                <img src={Arrow} alt="" />
              </button>
              <Link to='/shop'><GreenBtn className='w-[243px]'>Открыть магазин</GreenBtn></Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='mt-[41px] relative'>
        <img className='w-[420px] h-[646px] object-cover flex justify-end ' src={bigImg} alt="" />
        <img className='size-[197px] absolute top-[123px] left-[315px] object-cover object-top' src={img2} alt="" />
        <img className='w-[190px] h-[318px] absolute top-[389px] right-[340px] object-cover' src={img3} alt="" />
      </div>

    </section>
  )
}

export default SectionOne;