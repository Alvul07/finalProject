import React, { useEffect, useState } from 'react'
import WhiteBtn from '../Btns/WhiteBtn'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ApiProps from '../Api/ApiProps'


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
                {cards.slice(0, 3).map((item, index) => (
                    <div className='flex gap-[30px]'>
                        <ApiProps key={index} img={item.img} title={item.title} price={item.price}/>
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