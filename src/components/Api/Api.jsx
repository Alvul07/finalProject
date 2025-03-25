import React, { useContext } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ApiProps from './ApiProps';
import { ApiContext } from './ApiProvider';

const Api = () => {
    const {items, dataLength} = useContext(ApiContext);

    return (
        <ErrorBoundary>
            <p className="text-[17px] font-[500] text-[#808080] mb-[65px]">
                Показано: {items.length} из {dataLength} товаров
            </p>
            <div className='flex gap-x-[30px] flex-wrap gap-y-[65px]'>
                {items.map((item, index) => (
                    <ApiProps key={index} img={item.img} title={item.title} price={item.price}/>
                ))}
            </div>
            <p className="text-[17px] font-[500] text-[#808080] mt-[65px] mb-[65px]">
                Показано: {items.length} из {dataLength} товаров
            </p>
        </ErrorBoundary>
    )
}

export default Api;