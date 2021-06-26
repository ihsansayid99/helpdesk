import React from 'react';
import logoHelpdesk from '../assets/images/logo_helpdesk.png';
import Hamburger from 'hamburger-react';

export default function Navbar() {
    return (
        <div>
            <header className="z-40 mb-24 lg:mb-44">
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
                        <Hamburger direction="left" color="#fff" label="Show Bigger Menu"/>
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
}
