import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { VscHome } from "react-icons/vsc";
import { BiCart } from "react-icons/bi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { SlWallet, SlChart } from "react-icons/sl";
import { FiSettings } from "react-icons/fi";
import { GrPower } from "react-icons/gr";
import NavBar from "./NavBar";

const Sidebar = ({children}) => {
    return (
        <div className="flex h-[100vh]">
            {/* sidebar */}
            <div className="sidebar 
                flex 
                flex-col 
                gap-[50px] 
                items-center 
                bg-yellow-300 
                py-[30px] 
                px-[10px]"
            >
                <IoArrowForwardCircleOutline className="text-[40px]" />
                <VscHome />
                <BiCart />
                <RxQuestionMarkCircled />
                <SlWallet />
                <SlChart />
                <FiSettings />
                <GrPower />
            </div>

            <div className="adminPage bg-gray-50 w-full">
                <NavBar />
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Sidebar
