"use client";
import { useState } from 'react';

// components
import Navbar from './Navbar';
import MobilNavbar from "./MobilNavbar";
import MobilMenu from './MobilMenu';


function Header() {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <header>
            <div className="flex justify-center items-center mx-[20px] sm:mx-[0px]">
                <div className="bg-customGray w-[600px] h-[70px] mt-[20px] rounded-full">

                    <Navbar containerStyles='hidden sm:flex flex text-center justify-center items-center 
                h-full gap-[30px] text-customWhite font-thin text-lg' />

                    <MobilNavbar
                        setIsOpenMenu={setIsOpenMenu}
                        isOpenMenu={isOpenMenu}
                        containerStyles="sm:hidden flex justify-between items-center text-center 
                h-full mx-[30px]" />

                </div>
            </div>

            {!isOpenMenu ? '' : <MobilMenu
                setIsOpenMenu={setIsOpenMenu}
                isOpenMenu={isOpenMenu}
            />}
        </header>
    )
}

export default Header;