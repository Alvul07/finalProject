import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavShop from './NavShop';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';
import Footer from './Footer';


const Trousers = () => {
    const [trousers, setTrousers] = useState([])
    const [dataLength, setDataLength] = useState(0);


    useEffect(() => {
        axios.get("https://f0c39e7608e741b4.mokky.dev/things?type=Trousers&page=1&limit=9")
            .then((response) => {
                console.log(response.data);
                setTrousers(response.data.items);
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
                    <p className='font-[500] text-[17px] mt-[10px]'>Главная — <span className='text-[#909090]'>Брюки</span></p>
                </div>
                <NavShop />

                <ErrorBoundary>
                    <p className="text-[17px] font-[500] text-[#808080] mt-[65px] mb-[65px]">
                        Показано: {trousers.length} из {dataLength} товаров
                    </p>
                    <div className='flex gap-x-[30px] flex-wrap gap-y-[65px]'>
                        {trousers.map((item) => (
                            <div>
                                <img src={item.img} alt="" className='w-[350px] h-[478px] object-cover' />
                                <h4 className='text-center text-[20px] font-[500] mt-[20px]'>{item.title}</h4>
                                <p className='text-[#998E78] text-center text-[15px] font-[500]'>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </ErrorBoundary>
                <p className="text-[17px] font-[500] text-[#808080] mt-[65px] mb-[65px]">
                    Показано: {trousers.length} из {dataLength} товаров
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Trousers;