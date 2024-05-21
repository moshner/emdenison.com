import { Link } from "react-router-dom";
import React, { useState } from "react";
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
            <ul id="menu" className={`nav__menu ${showMenu ? "visible" : "hidden"} fixed top-0 right-0 px-10 py-16 bg-gray-900 z-50 h-full text-xl
            md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6`}>
                <li className="md:hidden z-90 fixed top-4 right-6">
                    <a href="javascript:void(0)" 
                        className="text-right text-white text-4xl"
                        onClick={toggleMenu}>&times;</a>
                </li>
                <li className="pt-3 text-white duration-300">
                    <Link onClick={closeMenuOnMobile} 
                            className={`${active!=="home" ? "underline": active} pr-3`} to="../">
                                Home
                    </Link>
                </li>
                <li className="pt-6 italic text-white">
                    Books:
                </li>
                <li className="pt-3 pl-5">
                    <Link onClick={closeMenuOnMobile} className={`text-white ${active!=="reluctant-cyborg" ? "underline": active}`} to="../book/the-reluctant-cyborg">
                        The Reluctant Cyborg (NEW!)
                    </Link>
                </li>
                <li className="pt-3 pl-5">
                    <Link onClick={closeMenuOnMobile} className={`text-white ${active!=="digital-native" ? "underline": active}`} to="../book/digital-native">
                        Digital Native
                    </Link>
                </li>
                <li className="pt-6">
                    <ButtonOutline href="#newsletter" text="Join Newsletter" textColor="text-white" borderColor="br-white" />
                </li>
            </ul>
            <div className="flex items-center md:hidden">
                <button className={`${menuColor} text-4xl font-bold opacity-70 hover:opacity-100 duration-300 fixed top-2 right-2 z-10`}
                    onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
        </>
    )
  }
  
  export default TopNav