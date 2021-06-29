import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import logoHelpdesk from '../assets/images/logo_helpdesk.png';

export default function Footer() {
    return (
        <div>
            <footer className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 px-8">
                        <img src={logoHelpdesk} alt="" width="250" />
                        <h2 className="text-gray-400 leading-relaxed mt-4 text-lg tracking-wide">
                            HelpDesk making businesses flow as we empower and automate your sales through technology and education.
                        </h2>
                        <div className="flex flex-row items-center mt-6">
                            <Link to="/" className="mr-4"><i className="fab fa-facebook-square text-4xl text-green"></i></Link>
                            <Link to="/" className="mr-4"><i className="fab fa-instagram text-4xl text-green"></i></Link>
                            <Link to="/" className="mr-4"><i className="fab fa-twitter text-4xl text-green"></i></Link>
                            <Link to="/" className="mr-4"><i className="fab fa-linkedin text-4xl text-green"></i></Link>
                        </div>
                    </div>
                    <div className="w-full px-8 lg:w-1/3">
                        <h2 className="text-white mt-4 text-2xl font-bold">
                            Newsletter
                        </h2>
                        <h2 className="text-green leading-relaxed mt-4 text-lg font-bold">
                            Subscribe to our Newsletter
                        </h2>
                        <form action="#" className="mt-6">
                            <div className="flex items-center mb-4">
                                <label htmlFor="name" className="text-xl text-green font-bold mr-8">Name <span className="text-red-400">*</span></label>
                                <input type="text" className="form_input_helpdesk"/>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="email" className="text-xl text-green font-bold mr-8">Email <span className="text-red-400">*</span></label>
                                <input type="email" className="form_input_helpdesk"/>
                            </div>
                            <div className="text-center mt-8">
                                <button className="px-4 py-2 rounded-3xl text-white bg-green hover:bg-green-600 transition-all duration-200">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/3">
                            <ul className="mt-6 text-base lg:text-xl ml-8 lg:ml-16 leading-loose text-green font-bold">
                                <li className="mb-2">
                                    <NavLink to="/about" className="link_hover_border_bottom">ABOUT</NavLink>
                                </li>
                                <li className="mb-2">
                                    <Link to="/" className="link_hover_border_bottom">BLOG</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/success-stories" className="link_hover_border_bottom">SUCCESS STORIES</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="link_hover_border_bottom">CONTACT</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/privay-policy" className="link_hover_border_bottom">PRIVACY POLICY</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/term-of-services" className="link_hover_border_bottom">TERM OF SERVICE</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/" className="link_hover_border_bottom">CRM</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/" className="link_hover_border_bottom">AUTOMATION</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/" className="link_hover_border_bottom">TRAINING</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/partners" className="link_hover_border_bottom">PARTNERS</Link>
                                </li>
                            </ul>
                    </div>
                </div>
                <div className="footer_copyright container mx-auto mt-8 px-8 py-6 text-gray-400">
                    Copyright © 2020 HelpDesk Pte Ltd. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
