import { MOBIL_MENU } from '@/constants';
import Link from 'next/link';


function MobilMenu({ setIsOpenMenu, isOpenMenu }: any) {
    return (
        <section className="fixed bottom-1 left-2 right-2 sm:hidden">

            <div className='bg-customGray text-customGray600 flex items-center justify-center text-center
            h-[129px] rounded-3xl gap-x-4'>
                {MOBIL_MENU.map((menu, index) => {
                    if (menu.title === 'Resume') {
                        return (
                            <Link href={menu.href} key={index}
                                className='hover:text-customPrimary flex flex-col text-center items-center text-lg'
                                download
                                target='e_blank'>
                                {menu.iconItem}
                                {menu.title}
                            </Link>
                        )
                    } else if (menu.title === 'close') {
                        return (
                            <Link href={menu.href} key={index}
                                className='text-customWhite flex flex-col text-center items-center text-2xl border rounded-full p-2 bg-customPrimary border-none'
                                onClick={() => setIsOpenMenu(!isOpenMenu)}>
                                {menu.iconItem}
                            </Link>
                        )
                    } else {
                        return (
                            <Link href={menu.href} key={index} className='hover:text-customPrimary flex flex-col text-center items-center text-lg' >
                                {menu.iconItem}
                                {menu.title}
                            </Link>
                        )
                    }

                })}

            </div>
        </section>
    )
}

export default MobilMenu;