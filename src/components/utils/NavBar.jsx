import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import profileImg from '../../assets/Profile.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='navBar flex justify-between bg-white px-[20px] py-[10px]'>
            <div className="navs flex gap-[30px]">
                <div className="logo font-bold">foodera</div>
                <div className="nav">الرئيسية</div>
                <div className="nav">المتاجر</div>
                <div className="nav">المستخدمين</div>
                <div className="nav">التسويق</div>
            </div>
            
            <div>

                <div className="flex gap-2 items-center relative">
                    <div>
                        <IoNotificationsOutline />
                        <div className="!bg-blue-800
                        !text-white
                        rounded-full
                        text-center
                        absolute
                        mt-[-25px]
                        ms-[-5px]
                        w-[15px]
                        text-[10px]">0</div>
                    </div>
                    <img src={profileImg} alt='profileImg' className="w-[40px]" />
                
                    <div
                        onClick={toggleDropdown}
                        className="flex gap-1 items-center cursor-pointer"
                    >
                        Admin
                        <IoIosArrowDown />
                    </div>
                </div>

                {isOpen && (
                    <div
                    className="absolute mt-2 left-[10px] w-40 bg-white shadow-lg rounded-md z-10"
                    >
                    <ul className="py-1 text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">خروج</li>
                    </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar
