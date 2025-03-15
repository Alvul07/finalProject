import React from 'react'
import Quality from '../assets/quality.svg'
import Speed from '../assets/speed.svg'
import Responsibility from '../assets/responsibility.svg'

const SectionThree = () => {
  return (
    <section className='max-w-[1110px] mx-auto mt-[130px]'>
        <h2 className='font-[500] text-[40px]'>Что для нас важно</h2>
        <div className='flex mt-[92px] items-center justify-between'>
            <div>
                <img className='size-[61px]' src={Quality} alt="" />
                <h3 className='font-[500] text-[25px] mt-[37px] mb-[24px]'>Качество</h3>
                <p className='h-[115px] font-[500] text-[17px]'>
                    Наши профессионалы работают на <br />
                    лучшем оборудовании для пошива <br />
                    одежды беспрецедентного <br />
                    качества</p>
            </div>
            <div>
                <img className='size-[65px] object-none' src={Speed} alt="" />
                <h3 className='font-[500] text-[25px] mt-[33px] mb-[24px]'>Скорость</h3>
                <p className='h-[115px] font-[500] text-[17px]'>
                    Благодаря отлаженной системе в <br />
                    Womazing мы можем отшивать до <br />
                    20-ти единиц продукции в наших <br />
                    собственных цехах</p>
            </div>
            <div>
                <img className='size-[61px]' src={Responsibility} alt="" />
                <h3 className='font-[500] text-[25px] mt-[37px] mb-[24px]'>Ответственность</h3>
                <p className='h-[115px] font-[500] text-[17px]'>
                    Мы заботимся о людях и планете. <br />
                    Безотходное производство и <br />
                    комфортные условия труда - все <br />
                    это Womazing</p>
            </div>
        </div>
    </section>
  )
}

export default SectionThree;