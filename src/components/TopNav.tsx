import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonOutline from "./ButtonOutline";

interface Props {
    active?: string;
    menuColor?: string;
}

const TopNav = ({ menuColor = "text-brown-50", active = "home" }: Props) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const closeMenuOnMobile = () => {
        if (window.innerWidth <=1150) {
            setShowMenu(false);
        }
    };

    return (
        <>
            <ul id="menu" className={`nav__menu ${showMenu ? "right-0" : "-right-full"} fixed top-0 px-10 py-16 bg-gray-900 z-50 h-full md:h-12 text-lg
            md:right-0 md:absolute md:mx-auto md:w-full md:align-right md:flex md:justify-center md:items-center md:p-0 md:bg-transparent md:flex-row md:space-x-3 transition-all duration-200`}>
                <li className={`md:hidden z-90 absolute top-4 right-6`}>
                    <a  
                        className={`text-right ${menuColor} text-4xl`}
                        onClick={toggleMenu}>&times;</a>
                </li>
                <li className={`pt-3 duration-300 ${menuColor}`}>
                    <Link onClick={closeMenuOnMobile} 
                            className={`${active!=="home" ? "underline": active} pr-3`} to="../">
                                Home
                    </Link>
                </li>
                <li className={`pt-6 md:pt-3 ${menuColor}`}>
                    <Link onClick={closeMenuOnMobile} className={`${menuColor} ${active!=="Books" ? "underline": active} pr-3`} to="../Books">
                        Books
                    </Link>
                </li>
                <li className={`pt-6 md:pt-3 ${menuColor}`}>
                    <Link onClick={closeMenuOnMobile} 
                            className={`${active!=="Short-Stories" ? "underline": active} pr-3`} to="../Short-Stories">
                                Short Stories
                    </Link>
                </li>
                <li className="pt-6 md:hidden">
                    <ButtonOutline href="https://emdenison.us11.list-manage.com/subscribe?u=12b962f2de11d672395103e1e&id=5cfc518044" text="Join Newsletter" textColor="text-white" borderColor="br-white" />
                </li>
            </ul>
            <div className="flex items-center md:hidden">
                <button className={`${menuColor} text-4xl font-bold opacity-70 hover:opacity-100 duration-300 absolute top-2 right-2 z-10`}
                    onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
        </>
    )
  }
  
  export default TopNav