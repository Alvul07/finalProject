import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import NavShop from './NavShop'
import ErrorBoundary from './ErrorBoundary'

const Coat = () => {
    const [coats, setCoats] = useState([])

    useEffect(() => {
        axios.get("https://f0c39e7608e741b4.mokky.dev/coats")
            .then((response) => {
                console.log(response.data);
                setCoats(response.data)
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
                    <p className='font-[500] text-[17px] mt-[10px]'>Главная — <span className='text-[#909090]'>Пальто</span></p>
                </div>
                <NavShop />
                <p className="text-[17px] font-[500] text-[#808080] mb-[65px]">
                    Показано: {coats.length} из {coats.length} товаров
                </p>
                <ErrorBoundary>
                    <div className='flex gap-x-[30px] flex-wrap gap-y-[65px]'>
                        {coats.map((item) => (
                            <div>
                                <img src={item.img} alt="" className='w-[350px] h-[478px] object-cover' />
                                <h4 className='text-center text-[20px] font-[500] mt-[20px]'>{item.title}</h4>
                                <p className='text-[#998E78] text-center text-[15px] font-[500]'>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </ErrorBoundary>
            </div>
            <Footer />
        </div>
    )
}

export default Coat;