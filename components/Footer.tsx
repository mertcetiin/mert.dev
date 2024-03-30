import { FOOTER_LINKS } from '@/constants';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="text-customGray400 font-bold pt-[20px]">
            <div className="bg-customBlack">
                <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-customGray400 text-sm text-center sm:text-left">© 2024 —
                        <Link href="https://www.instagram.com/mertt.cetiin/"
                            rel="noopener noreferrer"
                            className="text-customGray400 ml-1"
                            target="_blank">
                            @mertcetiin
                        </Link>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-2">
                        {FOOTER_LINKS.map((link, index) => {
                            return (
                                <Link href={link.href} key={index}
                                    className="text-customGray400 w-5 h-5"
                                    target='e_blank'>
                                    {link.iconItem}
                                </Link>
                            )
                        })}
                    </span>

                </div>
            </div>
        </footer>
    )
}

export default Footer;