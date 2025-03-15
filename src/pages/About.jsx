import React from 'react'
import Header from '../components/Header';
import Girl1 from '../assets/girl1.svg'
import Girl2 from '../assets/girl2.svg'
import GreenBtn from '../components/GreenBtn';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <div className='w-[1110px] mx-auto'>
        <Header />
        <div className='mt-[190px]'>
          <h1 className='text-[55px] font-[500]'>О бренде</h1>
          <p className='text-[17px] font-[500] mt-[20px]'>Главная — <span className='text-[#909090]'>О бренде</span></p>
        </div>
        <section className='mt-[214px] flex flex-col gap-[130px]'>
          <div className='flex items-center justify-between'>
            <img src={Girl1} alt="" />
            <div>
              <h3 className='font-[500] text-[25px]'>Идея и женщина</h3>
              <p className='text-[17px] font-[500] mt-[46px]'>
                Womazing была основана в 2010-ом и стала одной из самых <br />
                успешных компаний нашей страны. Как и многие итальянские <br />
                фирмы, Womazing остаётся семейной компанией, хотя ни один <br />
                из членов семьи не является модельером. <br />
                <span className='inline-block mt-[30px]'>
                  Мы действуем по успешной формуле, прибегая к услугам <br />
                  известных модельеров для создания своих коллекций. Этот <br />
                  метод был описан критиком моды Колином Макдауэллом как <br />
                  форма дизайнерского со-творчества, характерная для ряда <br />
                  итальянских prêt-a-porter компаний. </span></p>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-[500] text-[25px]'>Магия в деталях</h3>
              <p className='text-[17px] font-[500] mt-[46px]'>
                Первый магазин Womazing был открыт в маленьком городке <br />
                на севере страны в 2010-ом году. Первая коллекция состояла <br />
                из двух пальто и костюма, которые были копиями парижских <br />
                моделей.
                <span className='inline-block mt-[30px]'>
                  Несмотря на то, что по образованию основательница была <br />
                  адвокатом, ее семья всегда была тесно связана с шитьём <br />
                  (прабабушка основательницы шила одежду для женщин, а <br />
                  мать основала профессиональную школу кроя и шитья). <br />
                  Стремление производить одежду для масс несло в себе <br />
                  большие перспективы, особенно в то время, когда высокая <br />
                  мода по-прежнему доминировала, а рынка качественного <br />
                  prêt-a-porter попросту не существовало. </span></p>
            </div>
            <img src={Girl2} alt="" />
          </div>
          <Link to='/shop'><GreenBtn className='w-[260px] mx-auto'>
            <Link to='/shop'>Перейти в магазин</Link>
          </GreenBtn>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About;