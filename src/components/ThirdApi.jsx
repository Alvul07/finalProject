import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

const ThirdApi = () => {
    const [items, setItems] = useState([]);
    const [dataLength, setDataLength] = useState(0);


    useEffect(() => {
        axios.get('https://f0c39e7608e741b4.mokky.dev/things?page=3&limit=9')
            .then((response) => {
                console.log(response.data);
                setItems(response.data.items);
                setDataLength(response.data.meta.total_items)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <ErrorBoundary>
            <p className="text-[17px] font-[500] text-[#808080] mt-[200px] mb-[65px]">
                Показано: {items.length} из {dataLength} товаров
            </p>
            <div className='flex gap-x-[30px] flex-wrap gap-y-[65px]'>
                {items.map((item) => (
                    <div>
                        <img src={item.img} alt="" className='w-[350px] h-[478px] object-cover' />
                        <h4 className='text-center text-[20px] font-[500] mt-[20px]'>{item.title}</h4>
                        <p className='text-[#998E78] text-center text-[15px] font-[500]'>{item.price}</p>
                    </div>
                ))}
            </div>
            <p className="text-[17px] font-[500] text-[#808080] mt-[65px] mb-[65px]">
                Показано: {items.length} из {dataLength} товаров
            </p>
        </ErrorBoundary>
    )
}

export default ThirdApi;