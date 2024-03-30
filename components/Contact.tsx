"use client";
import { useState } from 'react';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.log('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id='contact' className='flex flex-col text-center justify-center items-center mt-[30px] px-4'>
            <h1 className='text-2xl md:text-4xl font-extrabold'>Get in touch</h1>
            <form onSubmit={handleSubmit}>
                <div className='mt-[47px] flex gap-x-[37px]'>
                    <input type="text" placeholder='Name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='border-b-2 sm:w-[358px] w-full bg-customBackground pb-[10px] outline-none text-customGray400'
                    />
                    <input type="text" placeholder='Last name'
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className='border-b-2 sm:w-[358px] w-full bg-customBackground pb-[10px] outline-none text-customGray400'
                    />
                </div>

                <div className='mt-[47px]'>
                    <input type="text" placeholder='Email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='border-b-2 bg-customBackground sm:w-[750px] w-full pb-[10px] outline-none text-customGray400'
                    />
                </div>

                <div className='mt-[47px]'>
                    <input type="text" placeholder='Message'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className='border-2 bg-customBackground sm:w-[750px] w-full h-[109px] pb-[10px] 
                        outline-none pl-[10px] text-customGray400'
                    />
                </div>

                <button
                    type='submit'
                    className='border mt-[29px] w-[143px] h-[42px] rounded-full bg-customBlack text-customWhite cursor-pointer hover:text-customPrimary'>
                    Submit
                </button>

            </form>
        </section>
    )
}

export default Contact;