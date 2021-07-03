import React, { useEffect, useState } from 'react';
import logoHalodesk from '../assets/images/logo_halodesk.png';
import Hamburger from 'hamburger-react';
import { Link , useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const location = useLocation()
    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    useEffect(() => {
        if(location.hash){
            let elm = document.getElementById(location.hash.slice(1))
            if(elm){
                elm.scrollIntoView(true)
                window.scroll({top: (elm.offsetTop - 100), behavior: "smooth"})
                setOpen(false);
            }
        }else{
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
            setOpen(false);
        }
    }, [location])
    return (
        <div>
            <header className={["z-40 mb-10 lg:mb-22 fixed min-w-full transition-colors duration-300", navbar ? "bg-white" : 'bg-transparent'].join(" ")}>
                <div className="header_wrapper flex items-center justify-between px-2 container mx-auto py-3 lg:py-3">
                    <div className="header_brand-menu flex items-center container">
                        <div className="header__brand pl-4 mr-8">
                            <Link to="/">
                                <img src={logoHalodesk} className="w-52 md:w-60" alt="Helpdesk Logo" />
                            </Link>
                        </div>
                        <div className="header__menu hidden xl:block mx-auto">
                            <ul className="flex text-gray-700  tracking-wide font-medium">
                                <li className="px-4"><Link to="/#features" className="link_hover_border_bottom_transition_border cursor-pointer transition-colors duration-200">Features</Link></li>
                                <li className="px-4"><Link to="/#benefits" className="link_hover_border_bottom_transition_border cursor-pointer transition-colors duration-200">Benefits</Link></li>
                                <li className="px-4"><Link to="/privacy-policy" className="link_hover_border_bottom_transition_border cursor-pointer transition-colors duration-200">Privacy Policy</Link></li>
                                <li className="px-4"><Link to="/term-of-services" className="link_hover_border_bottom_transition_border cursor-pointer transition-colors duration-200">Term and Condition</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__menu-utils flex items-center">
                        <div className="btn_contact_utils px-0 md:px-10">
                            <Link to="/contact" className="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 px-10 py-2 rounded-3xl border-0 text-white font-bold text-sm md:text-base">contact</Link>
                        </div>
                        <div className="btn_humburger px-4 show lg:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} direction="left" color='#E3B104'label="Show Bigger Menu"/>
                        </div>
                    </div>
                </div>
                <div className={["bg-white border-b-2 border-t-2 border-yellow-200 min-w-full container", !isOpen ? 'h-0 hidden' : 'h-52 show']}>
                    <ul className="flex flex-col text-gray-700 tracking-wide font-medium px-4 py-4 md:px-12 pb-6 mx-auto">
                        <li className="py-1"><Link to="/#features" className="link_hover_border_bottom_transition_border cursor-pointer">Features</Link></li>
                        <li className="py-1"><Link to="/#benefits" className="link_hover_border_bottom_transition_border cursor-pointer">Benefits</Link></li>
                        <li className="py-1"><Link to="/privacy-policy" className="link_hover_border_bottom_transition_border cursor-pointer">Privacy Policy</Link></li>
                        <li className="py-1"><Link to="/term-of-services" className="link_hover_border_bottom_transition_border cursor-pointer">Term and Condition</Link></li>
                    </ul>
                </div>
            </header>
            
        </div>
    )
}
