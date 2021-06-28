import React, { useState } from 'react';
import logoHelpdesk from '../assets/images/logo_helpdesk.png';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <div className={['sidebar fixed right-0 h-full min-h-full min-w-full bg-white py-12 w-full px-10 lg:px-52 transition-opacity duration-300', isOpen ? 'is-open z-30' : 'is-fadeout'].join(" ")}>
                <div className="sidebar_head flex justify-between items-center">
                    <div className="sidebar__brand">
                        <img src={logoHelpdesk} className="w-48 md:w-60" alt="Helpdesk Logo" />
                    </div>
                    <div className="sidebar__hamburger px-6 lg:px-14 -mt-11 lg:-mt-4 fixed lg:right-64 right-0">
                        <Hamburger toggled={isOpen} toggle={setOpen} direction="left" color="#000" label="Show Bigger Menu"/>
                    </div>
                </div>
                <div className="sidebar_menu flex flex-col lg:flex-row mt-16 px-6">
                    <div className="w-full lg:w-1/2">
                        <div className="sidebar__menu_item mb-6">
                            <Link to="/" className="link_hover_border_bottom_transition_border">
                                <h2 className="text-black text-3xl font-bold">crm</h2>
                            </Link>
                            <p className="text-gray-400 text-sm lg:text-lg mt-2 leading-relaxed">A simplified CRM software optimised for sales teams and professionals. Convert leads and close prospects easier than ever.</p>
                        </div>
                        <div className="sidebar__menu_item mb-6">
                            <Link to="/" className="link_hover_border_bottom_transition_border">
                                <h2 className="text-black text-3xl font-bold">automation</h2>
                            </Link>
                            <p className="text-gray-400 text-sm lg:text-lg mt-2 leading-relaxed">Do more than automate your email — activate your entire customer experience</p>
                        </div>
                        <div className="sidebar__menu_item mb-6">
                            <Link to="/" className="link_hover_border_bottom_transition_border">
                                <h2 className="text-black text-3xl font-bold">training</h2>
                            </Link>
                                <p className="text-gray-400 text-sm lg:text-lg mt-2 leading-relaxed">Upskill your employee into digital sales professional to drive more sales for you!</p>
                        </div>
                        <div className="sidebar__menu_social flex flex-row items-center mt-8">
                            <Link to="/" className="mr-4"><i class="fab fa-facebook-square text-4xl text-green"></i></Link>
                            <Link to="/" className="mr-4"><i class="fab fa-instagram text-4xl text-green"></i></Link>
                            <Link to="/" className="mr-4"><i class="fab fa-twitter text-4xl text-green"></i></Link>
                            <Link to="/" className="mr-4"><i class="fab fa-linkedin text-4xl text-green"></i></Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="sidebar__menu_item_second mt-10">
                                <ul className="mt-6 text-2xl lg:text-3xl lg:ml-16 text-black font-bold">
                                    <li className="mb-4">
                                        <Link to="/about" className="link_hover_border_bottom_transition_border">about</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/success-stories" className="link_hover_border_bottom_transition_border">success stories</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/" className="link_hover_border_bottom_transition_border">career</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/" className="link_hover_border_bottom_transition_border">blog</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/" className="link_hover_border_bottom_transition_border">contact</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className="z-40 mb-10 lg:mb-22">
                <div className="header_wrapper flex items-center justify-between px-2 container mx-auto py-6 lg:py-10 bg-transparent">
                <div className="header_brand-menu flex items-center">
                    <div className="header__brand mr-8">
                        <img src={logoHelpdesk} className="w-48 md:w-60" alt="Helpdesk Logo" />
                    </div>
                    <div className="header__menu hidden xl:block">
                    <ul className="flex text-gray-700 tracking-wide font-medium">
                        <li className="px-4">crm</li>
                        <li className="px-4">automation</li>
                        <li className="px-4">training</li>
                        <li className="px-4">login</li>
                    </ul>
                    </div>
                </div>
                <div className="header__menu-utils flex items-center">
                    <div className="btn_contact_utils px-0 md:px-10">
                    <button className="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 px-10 py-2 rounded-3xl border-0 text-white font-bold text-sm md:text-base">contact</button>
                    </div>
                    <div className="btn_humburger px-4">
                        <Hamburger toggled={isOpen} toggle={setOpen} direction="left" color='#fff'label="Show Bigger Menu"/>
                    </div>
                </div>
                </div>
                
            </header>
            
        </div>
    )
}
