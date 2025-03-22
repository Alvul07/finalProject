import React from 'react'
import Header from '../components/Header';
import Res1 from '../assets/res1.jpeg'
import Res2 from '../assets/res2.jpeg'
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
          <p className='text-[17px] font-[500] mt-[20px] flex gap-[13px]'>Главная <span>—</span> <span className='text-[#909090]'>О бренде</span></p>
        </div>
        <section className='mt-[214px] flex flex-col gap-[130px]'>
          <div className='flex items-center justify-between'>
            <img className='w-[442px] h-[547px] object-cover object-top' src={Res2} alt="" />
            <div>
              <h3 className='font-[500] text-[25px]'>Идея</h3>
              <p className='text-[17px] font-[500] mt-[46px] w-[540px]'>
                Сайт посвящен стильной и экологичной одежде
                из переработанных материалов. Мы создаем модные коллекции,
                уменьшая отходы и заботясь о природе. В каталоге – пальто,
                брюки, куртки и толстовки, сделанные из переработанного пластика,
                тканей и других экологичных материалов.
                <span className='mt-[30px] inline-block'>
                  Покупая у нас, вы не только обновляете гардероб,
                  но и поддерживаете осознанное потребление.
                  Присоединяйтесь к движению за устойчивую моду – выглядите стильно,
                  сохраняя природу!
                </span>
              </p>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-[500] text-[25px]'>Магия в деталях</h3>
              <p className='text-[17px] font-[500] mt-[46px] w-[540px]'>
                Первый концептуальный магазин <span className='font-[700]'>ReWear </span>
                появился в небольшом городе
                на севере страны в 2015 году. Первая коллекция включала всего несколько
                базовых вещей, созданных из переработанных тканей, но сразу привлекла
                внимание сторонников экологичной моды.
                <span className='mt-[30px] inline-block'>
                  Несмотря на то, что основатель учился на инженера,
                  его семья всегда была связана с текстилем:
                  бабушка работала на швейной фабрике, а отец занимался производством тканей.
                  Идея создавать стильную и доступную одежду из переработанных материалов
                  оказалась перспективной – в то время осознанное потребление только
                  набирало популярность, а рынок доступной экомоды практически отсутствовал.
                </span>
              </p>
            </div>
            <img className='w-[442px] h-[547px] object-cover' src={Res1} alt="" />
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