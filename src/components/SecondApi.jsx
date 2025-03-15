import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SecondApi = () => {
    const [imgs, setImgs] = useState([]);
    const [imgs2, setImgs2] = useState([]);
    const [imgs3, setImgs3] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://f0c39e7608e741b4.mokky.dev/items?title=*Usa`)
            .then((response) => {
                setImgs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        setLoading(false);
    }, []);

    useEffect(() => {
        axios.get(`https://f0c39e7608e741b4.mokky.dev/items?title=*Glow`)
            .then((response) => {
                setImgs2(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get(`https://f0c39e7608e741b4.mokky.dev/items?title=*Shot`)
            .then((response) => {
                setImgs3(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <p className="text-[17px] font-[500] text-[#808080] mb-[65px]">
                Показано: 3 из 12 товаров
            </p>
            <div className='flex flex-col gap-[65px]'>
                <div className='flex justify-between'>
                    {imgs.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt="" className='w-[350px] h-[478px] object-cover' />
                            <h4 className='text-center text-[20px] font-[500]'>{item.title}</h4>
                            <div className='flex gap-[10px] justify-center text-[15px] font-[500]'>
                                <p className='text-[#9C9C9C] line-through'>{item.price}</p>
                                <p className='text-[#998E78]'>{item.value}</p>
                            </div>
                        </div>
                    ))}
                    {imgs2.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt="" className='w-[350px] h-[478px] object-cover' />
                            <h4 className='text-center text-[20px] font-[500]'>{item.title}</h4>
                            <p className='text-[#998E78] text-center text-[15px] font-[500]'>{item.value}</p>
                        </div>
                    ))}
                    {imgs3.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt="" className='w-[350px] h-[478px] object-cover' />
                            <h4 className='text-center text-[20px] font-[500]'>{item.title}</h4>
                            <p className='text-[#998E78] text-center text-[15px] font-[500]'>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-[17px] font-[500] text-[#808080] mt-[65px] mb-[65px]">
                Показано: 3 из 12 товаров
            </p>
        </div>
    );
};

export default SecondApi;
