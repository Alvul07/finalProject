import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Ring from '../../assets/ring.svg';
import closeIcon from '../../assets/Close.svg';

export default function Call() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const [open, setOpen] = React.useState(false);
    const [successOpen, setSuccessOpen] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Отправленные данные:", formData);

        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
        });

        setOpen(false);
        setSuccessOpen(true);

        setTimeout(() => {
            setSuccessOpen(false);
        }, 3000);
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)} sx={{ "&:hover": { backgroundColor: "transparent" }, gap: "10px" }}>
                    <img src={Ring} alt="" />
                <p className='text-black text-[15px] font-[400]'>+996 555-444-333</p>
            </Button>

            <Backdrop
                sx={{ backgroundColor: '#6E9C9FF2', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                transitionDuration={500}
            >
                <div className='w-[490px] h-[500px] bg-white flex flex-col'>
                    <button onClick={() => setOpen(false)} className='ml-auto cursor-pointer pt-[32px] pr-[32px]'>
                        <img src={closeIcon} alt="" />
                    </button>
                    <form method="post" onSubmit={handleSubmit} className='text-black flex flex-col gap-[35px] items-center py-[30px]'>
                        <h3 className='font-[500] text-[25px]'>Заказать обратный звонок</h3>
                        <input className='border-b w-[350px] h-[40px]' name='name' value={formData.name} type="text" placeholder='Имя' onChange={handleChange} required />
                        <input className='border-b w-[350px]' name='email' value={formData.email} onChange={handleChange} type="email" placeholder='E-mail' required />
                        <input className='border-b w-[350px]' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder='Телефон' required />
                        <button type="submit"
                            className='h-[68px] bg-[#6E9C9F] text-white text-[17px] hover:bg-[#509498] duration-500 w-[350px] cursor-pointer'>
                            Заказать звонок
                        </button>
                    </form>
                </div>
            </Backdrop>

            <Backdrop
                sx={{ backgroundColor: '#6E9C9FF2', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={successOpen}
            >
                <div className='w-[400px] h-[250px] bg-white flex flex-col items-center justify-center text-center'>
                    <h3 className='text-[25px] font-[500] text-black'>Отлично! Мы скоро вам перезвоним.</h3>
                </div>
            </Backdrop>
        </div>
    );
}
