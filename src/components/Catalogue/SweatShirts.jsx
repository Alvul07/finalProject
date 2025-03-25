import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavShop from '../Shop/NavShop';
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import NavBtn from '../Btns/NavBtn';
import ApiProps from '../Api/ApiProps';


const SweatShirts = () => {
    const [sweatShirts, setSweatShirts] = useState([])
    const [dataLength, setDataLength] = useState(0)


    useEffect(() => {
        axios.get("https://f0c39e7608e741b4.mokky.dev/things?type=SweatShirt&page=1&limit=9")
            .then((response) => {
                setSweatShirts(response.data.items);
                setDataLength(response.data.meta.total_items)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div>
            <div className='w-[1110px] mx-auto'>
                <Header />
                <div className='mt-[190px]'>
                    <h1 className='font-[500] text-[55px]'>Магазин</h1>
                    <p className='font-[500] text-[17px] mt-[10px] flex gap-[13px]'>Главная <span>—</span> <span className='text-[#909090]'>Толстовки</span></p>
                </div>
                <NavShop />
                <p className="text-[17px] font-[500] text-[#808080] mb-[65px]">
                    Показано: {sweatShirts.length} из {dataLength} товаров
                </p>
                <ErrorBoundary>
                    <div className='flex gap-x-[30px] flex-wrap gap-y-[65px]'>
                        {sweatShirts.map((item, index) => (
                            <ApiProps key={index} img={item.img} title={item.title} price={item.price}/>
                        ))}
                    </div>
                </ErrorBoundary>
                <p className="text-[17px] font-[500] text-[#808080] mt-[65px] mb-[65px]">
                    Показано: {sweatShirts.length} из {dataLength} товаров
                </p>
            </div>
            <div className="flex justify-center gap-[14px] mb-2 text-[17px] font-[500]">
                <NavBtn to='/sweatShirts'>1</NavBtn>
                <NavBtn to='/sweatShirts2'>2</NavBtn>
            </div>
            <Footer />
        </div>
    )
}

export default SweatShirts;
