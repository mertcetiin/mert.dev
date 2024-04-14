import { PROFILE_INFO, PROFILE_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';


function About() {

    const getColorClass = (iconHover: any) => {
        switch (iconHover) {
            case 'customGray800':
                return 'hover:bg-customGray800';
            case 'customBlue600':
                return 'hover:bg-customBlue600';
            case 'customBlue500':
                return 'hover:bg-customBlue500';
            case 'customTeal500':
                return 'hover:bg-customTeal500';
            default:
                return '';
        }
    };

    return (
        <section id="about" className="w-full px-4">
            <div className="flex flex-col justify-center mt-[40px] max-w-md mx-auto bg-customWhite shadow-xl rounded-2xl p-5">

                <Image
                    src={'/profile.jpg'}
                    alt="profile"
                    width={150}
                    height={100}
                    className="rounded-full mx-auto shadow-2xl"
                />

                <div className="text-center mt-5">

                    {PROFILE_INFO.map((profile, index) => (
                        <div key={index}>
                            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{profile.name}</h1>
                            <h3 className="text-xl sm:text-lg font-semibold pt-2 text-customGray600">{profile.department}</h3>
                            <p className="text-xs sm:text-base text-customGray400 pt-4 pb-4 px-5 w-auto inline-block border-b-2">{profile.info}</p>
                        </div>
                    ))}

                    <div className="flex align-center justify-center mt-4">

                        {PROFILE_LINKS.map((profile, index) => (
                            <div key={index}>
                                <Link
                                    href={profile.href}
                                    target="_blank"
                                    className={`text-xl m-1 p-1 sm:m-2 sm:p-2 flex gap-20 rounded-full ${getColorClass(profile.iconHover)}`}
                                >
                                    {profile.key === 'github' && <FaGithub className="text-customGray800 hover:text-customWhite" />}
                                    {profile.key === 'linkedın' && <FaLinkedin className="text-customBlue600 hover:text-customWhite" />}
                                    {profile.key === 'twitter' && <FaTwitter className="text-customBlue500 hover:text-customWhite" />}
                                    {profile.key === 'instagram' && <FaInstagram className="text-customTeal500 hover:text-customWhite" />}
                                </Link>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section >
    )
}

export default About;