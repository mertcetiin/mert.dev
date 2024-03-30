import Image from 'next/image'
import Link from 'next/link';

import { RxHamburgerMenu } from "react-icons/rx";


function MobilNavbar({ containerStyles, isOpenMenu, setIsOpenMenu }: any) {

    return (
        <section className={`${containerStyles}`}>

            <Image
                src={'/profile.jpg'}
                alt=""
                width={35}
                height={40}
                className="rounded-full"
            />

            <Link href='https://www.instagram.com/mertt.cetiin/'
                className='text-customPrimary'
                target='e-blank'>
                @mertcetiin
            </Link>

            <RxHamburgerMenu
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className='text-customWhite text-4xl p-[5px] rounded-full border-2 border-customGray600' />
        </section>
    )
}

export default MobilNavbar;