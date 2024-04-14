"use client";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


function Contact() {

    const emailjsId = process.env.EMAILJS_ID;

    const sendEmail = (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const lastname = formData.get('lastname') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (!emailjsId) {
            console.error('EMAILJS_ID is not defined in the environment variables.');
            return;
        }

        if (!name || !lastname || !email || !message) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sorry, we couldn't send your email.",
            });
            return;
        }

        emailjs.sendForm(emailjsId, 'template_1uyvtbd', e.currentTarget, '_iK-H1UxjsZ_PV63Q')
            .then((result) => {
                console.log(result.text);

                Swal.fire({
                    title: "Success!",
                    text: "Your email has been sent successfully!",
                    icon: "success"
                });

            })
            .catch((error) => {
                console.log(error.text);

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Sorry, we couldn't send your email.",
                });
            });

        e.currentTarget.reset();
    };

    return (
        <section id='contact' className='flex flex-col text-center justify-center items-center mt-[30px] px-4'>
            <h1 className='text-2xl md:text-4xl font-extrabold'>Get in touch</h1>
            <form onSubmit={sendEmail}>
                <div className='mt-[47px] flex gap-x-[37px]'>
                    <input
                        type="text" placeholder='Name'
                        name="name"

                        className='border-b-2 sm:w-[358px] w-full bg-customBackground pb-[10px] outline-none text-customGray400'
                    />
                    <input
                        type="text" placeholder='Last name'
                        name="lastname"

                        className='border-b-2 sm:w-[358px] w-full bg-customBackground pb-[10px] outline-none text-customGray400'
                    />
                </div>

                <div className='mt-[47px]'>
                    <input
                        type="text" placeholder='Email'
                        name="email"

                        className='border-b-2 bg-customBackground sm:w-[750px] w-full pb-[10px] outline-none text-customGray400'
                    />
                </div>

                <div className='mt-[47px]'>
                    <input
                        type="text" placeholder='Message'
                        name="message"

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