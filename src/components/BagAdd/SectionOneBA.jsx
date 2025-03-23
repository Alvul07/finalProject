import React, { useEffect, useState } from 'react'
import ErrorBoundary from '../ErrorBoundary';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GreenBtn from '../GreenBtn';


const SectionOneBA = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const [product, setProduct] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [newIndex, setNewIndex] = useState(null);
    const [count, setCount] = useState(1);
    const min = 1;
    const max = 20;
    const [coats, setCoats] = useState([])

    const colors = [
        { name: 'clr1', color: 'bg-[#927876]' },
        { name: 'clr2', color: 'bg-[#D4D4D4]' },
        { name: 'clr3', color: 'bg-[#FD9696]' },
        { name: 'clr4', color: 'bg-[#FDC796]' }
    ];


    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const handleClickIndex = (index) => {
        setNewIndex(index);
    };

    useEffect(() => {
        axios.get("https://f0c39e7608e741b4.mokky.dev/things")
            .then(response => {
                console.log(response.data);

                const foundProduct = response.data.find(item => item.title === decodedTitle);
                setProduct(foundProduct);
            })
            .catch(error =>
                console.log(error));
    }, [decodedTitle]);

    useEffect(() => {
        axios.get("https://f0c39e7608e741b4.mokky.dev/things?type=Coat")
        .then((response) => {
            console.log(response.data)
            setCoats(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    if (!product) return <p>Загрузка...</p>;

    return (
        <ErrorBoundary>
            <section className='mt-[100px]'>
                <h1 className='text-[55px] font-[500]'>{product.title}</h1>
                <p className='text-[17px] font-[500] mt-[20px] flex gap-[13px]'>
                    Главная <span>—</span> <span>Магазин</span> <span>—</span> <span className='text-[#909090]'>{product.title}</span>
                </p>
                <div className='flex mt-[100px] gap-[48px] items-center'>
                    <img src={product.img} alt="" className='w-[536px] h-[729px] object-cover' />
                    <div className='flex flex-col gap-[60px]'>
                        <div className='ml-[26px] flex flex-col gap-[60px]'>
                            <h2 className='text-[#998E78] text-[40px] font-[500] ml-[10px]'>{product.price}</h2>
                            <div>
                                <h4 className='font-[500] text-[20px]'>Выберите размер</h4>
                                <div className='flex gap-[14px] mt-[34px]'>
                                    {['S', 'M', 'L', 'XL', 'XXL'].map((label, index) => (
                                        <button key={index} onClick={() => handleClick(index)} className={`flex items-center justify-center border border-solid border-black size-[40px] ${activeIndex === index ? 'bg-black text-white' : ''}`}>{label}</button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className='font-[500] text-[20px]'>Выберите цвет</h4>
                                <div className='flex gap-[14px] mt-[34px]'>
                                    {colors.map((color, index) => (
                                        <button key={color.name} onClick={() => handleClickIndex(index)} className={`size-[41px] rounded-[50%] ${color.color} ${newIndex === index ? 'border-2 border-black' : ''}`}></button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-[30px]'>
                            <div className='flex gap-[10px]'>
                                <button className={`text-[30px] ${count === min ? "invisible cursor-not-allowed" : ""}`}
                                    onClick={() => setCount((prev) => Math.max(prev - 1, min))} >-</button>
                                <button className={`size-[68px] border border-[#AFAFAF] flex items-center justify-center text-[20px] ${count === max ? "cursor-not-allowed" : ""}`}
                                    onClick={() => setCount((prev) => Math.min(prev + 1, max))}>{count}</button>
                            </div>
                            <GreenBtn className='w-[268px]'>Добавить в корзину</GreenBtn>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>
    )
}

export default SectionOneBA;