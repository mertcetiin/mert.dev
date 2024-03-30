import { NAVBAR_LINKS } from '@/constants';
import Link from 'next/link';


function Navbar({ containerStyles }: any) {
    return (
        <nav className={`${containerStyles}`}>
            {NAVBAR_LINKS.map((link) => {
                if (link.key === 'resume') {
                    return (
                        <Link
                            href={link.href}
                            key={link.key}
                            className='hover:text-customPrimary'
                            download
                            target='e-blank'>
                            {link.label}
                        </Link>
                    )
                } else {
                    return (
                        <Link
                            href={link.href}
                            key={link.key}
                            className='hover:text-customPrimary'
                        >
                            {link.label}
                        </Link>
                    )
                }

            })}
        </nav>
    )
}

export default Navbar;