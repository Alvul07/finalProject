import React from 'react'
import SecondApi from './SecondApi';
import ErrorBoundary from './ErrorBoundary';

const ShopSectionApi = () => {
  return (
    <section className='mt-[214px]'>
            <div>
                <nav>
                    <ul className='flex gap-[10px]'>
                        <li><button className='h-[62px] w-[162px] border border-black text-[17px] font-[500]'>Все</button></li>
                        <li><button className='h-[62px] w-[191px] border border-black text-[17px] font-[500]'>Пальто</button></li>
                        <li><button className='h-[62px] w-[216px] border border-black text-[17px] font-[500]'>Свитшоты</button></li>
                        <li><button className='h-[62px] w-[223px] border border-black text-[17px] font-[500]'>Кардиганы</button></li>
                        <li><button className='h-[62px] w-[218px] border border-black text-[17px] font-[500]'>Толстовки</button></li>
                    </ul>
                </nav>
            </div>
            <div className='mt-[92px]'>
                <ErrorBoundary>
                    <SecondApi />
                </ErrorBoundary>
            </div>

        </section>
    )
}

export default ShopSectionApi;