import React, { useEffect, useState } from 'react'
import WhiteBtn from './WhiteBtn'
import ArrowR from '../assets/arrowR.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SectionTwo = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get("https://f0c39e7608e741b4.mokky.dev/things")
            .then((response) => {
                console.log(response.data)
                setCards(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (
        <section className='max-w-[1110px] mx-auto mt-[130px]'>
            <h1 className='font-[500] text-[40px] mb-[92px]'>Новая коллекция</h1>
            <div className='flex justify-between'>
                {cards.slice(0, 3).map((item) => (
                    <div className='flex gap-[30px]'>
                        <div>
                            <button className='duration-500 relative group cursor-pointer overflow-hidden'>
                                <img className='w-[350px] h-[478px] object-cover' src={item.img} alt="" />
                                <div className="absolute inset-0 bg-[#6E9C9FA3] opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span><img src={ArrowR} alt="" /></span>
                                </div>
                            </button>
                            <h4 className='text-center text-[20px] font-[500] mt-[20px]'>{item.title}</h4>
                            <p className='text-[#998E78] text-center text-[15px] font-[500]'>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-[65px]'>
                <Link to='/shop'>
                    <WhiteBtn className='w-[243px] h-[68px]'>Открыть магазин</WhiteBtn>
                </Link>
            </div>
        </section>
    )
}

export default SectionTwo;