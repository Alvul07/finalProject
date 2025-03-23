import React, { useEffect, useState } from 'react'
import Squad1 from '../assets/squad1.jpg'
import Squad2 from '../assets/squad2.jpg'
import Squad3 from '../assets/squad3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowL1 from '../assets/arrowL1.svg'
import ArrowR1 from '../assets/arrowR1.svg'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SectionFour = () => {
    const [swiper, setSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange =
        (swiperInstance) => {
            setIsEnd(swiperInstance.isEnd);

            setIsBeginning(swiperInstance.isBeginning);
        }

    const handlePrev = () => {
        if (!isBeginning) {
            swiper?.slidePrev();
        }
    };
    const handleNext = () => {
        if (!isBeginning) {
            swiper?.slideNext();
        }
    };

    useEffect(() => {
        if (swiper) {
            setIsEnd(swiper.isEnd);

            setIsBeginning(swiper.isBeginning);
        }
    }, [swiper]);

    return (
        <section className='max-w-[1250px] mx-auto mt-[130px] relative'>
            <div className='w-[1110px] mx-auto'>
                <h2 className='font-[500] text-[40px] mb-[92px]'>Команда мечты ReWear</h2>
            </div>
            <button
                onClick={() => swiper?.handlePrev()}
                className={`custom-prev absolute top-[390px] right-[1213px] transform -translate-y-1/2 z-10
            ${isBeginning ? "invert-50 cursor-not-allowed" : "brightness-0"}`}
                disabled={isBeginning}>
                <img src={ArrowL1} alt="Previous" />
            </button>
            <button onClick={() => swiper?.handleNext()}
                className={`absolute custom-next absolute top-[390px] right-[389px] transform -translate-y-1/2 z-10
        ${isEnd ? "invert-50 cursor-not-allowed" : "brightness-0"}`}
                disabled={isEnd}>
                <img src={ArrowR1} alt="Next" />
            </button>

            <div className='flex justify-between items-center'>
                <div>
                    <Swiper
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }} modules={[Navigation, Pagination]} slidesPerView={1} loop={false}
                        initialSlide={0}
                        spaceBetween={10} className="mineSwiper w-[800px]"
                        onSwiper={setSwiper}
                        onSlideChange={handleSlideChange}
                    >
                        <SwiperSlide><img className='w-[729px] h-[488px] object-cover ml-[70px]' src={Squad3} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-[729px] h-[488px] ml-[70px]' src={Squad1} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-[729px] h-[488px] object-cover ml-[70px] object-top' src={Squad2} alt="" /></SwiperSlide>
                    </Swiper>
                </div>

                <div className='w-[285px]'>
                    <h3 className='font-[500] text-[25px]'>Наша одежда</h3>
                    <p className='font-[500] text-[17px] mb-[28px] mt-[28px]'>
                        Это стиль и забота о природе.
                        Мы перерабатываем ткани,
                        создавая экологичную моду.
                    </p>
                    <p className='font-[500] text-[17px] mb-[28px]'>
                        Покупая такую одежду, вы снижаете отходы,
                        поддерживаете устойчивое производство и
                        помогаете сделать моду осознанной.
                        Давайте вместе заботиться о планете!
                    </p>
                    <Link to='/about' className='text-[#6E9C9F] hover:underline hover:underline-offset-[8px] decoration-[#CEDEDF]'>Подробнее о бренде</Link>
                </div>
            </div>
        </section>
    )
}

export default SectionFour