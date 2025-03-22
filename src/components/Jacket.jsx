import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavShop from './NavShop';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';
import Footer from './Footer';
import ApiProps from './ApiProps';

const Jacket = () => {
    const [jackets, setJackets] = useState([])
    const [dataLength, setDataLength] = useState(0);


    useEffect(() => {
        axios.get("https://f0c39e7608e741b4.mokky.dev/things?type=Jacket&page=1&limit=9")
            .then((response) => {
                setJackets(response.data.items);
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
                    <p className='font-[500] text-[17px] mt-[10px] flex gap-[13px]'>Главная <span>—</span> <span className='text-[#909090]'>Куртки</span></p>
                </div>
                <NavShop />
                <p className="text-[17px] font-[500] text-[#808080] mb-[65px]">
                    Показано: {jackets.length} из {dataLength} товаров
                </p>
                <ErrorBoundary>
                    <div className='flex gap-x-[30px] flex-wrap gap-y-[65px]'>
                        {jackets.map((item, index) => (
                            <ApiProps key={index} img={item.img} title={item.title} price={item.price}/>
                        ))}
                    </div>
                </ErrorBoundary>
                <p className="text-[17px] font-[500] text-[#808080] mt-[65px] mb-[65px]">
                    Показано: {jackets.length} из {dataLength} товаров
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Jacket;