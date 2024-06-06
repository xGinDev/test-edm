'use client'
import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setMessage('El email ingresado no es válido.');
        } else {
            const isEven = email.length % 2 === 0;
            setMessage(`El email es válido y tiene un número ${isEven ? 'par' : 'impar'} de caracteres.`);
        }
    }

    return (
        <div className={'flex flex-col justify-center items-center w-full'}>
            <span className={'uppercase text-sm text-[#bfc2c7]'}>Newsletter</span>
            <p className={'uppercase text-3xl my-2'}>Suscribete</p>
            <p>Y enterate de todas las novedades</p>
            <form onSubmit={handleSubmit} className={'w-full px-6 xl:w-2/4'}>
                <div className={'relative my-4'}>
                    <input
                        type="email"
                        placeholder={'Ingresa tu email'}
                        className={'border-2 py-2 px-2 text-left w-full'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type={'submit'} className={'absolute top-[5rem] right-[.8rem] xl:top-[.5rem]'}>→</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Newsletter;
