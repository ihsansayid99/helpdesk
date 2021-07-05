import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logoHalodesk from '../assets/images/logo_halodesk.png';

export default function Footer() {
    const tahunTerbaru = new Date().getFullYear();
    return (
        <div>
            <footer className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center">
                    <div className="flex flex-row w-full items-start lg:items-center">
                        <div className="w-1/2 px-8 border-gray-50 border-r-2 text-center lg:text-left">
                            <img src={logoHalodesk} alt="" width="150" className="mx-auto lg:mx-0" />
                            <ul className="mt-6 text-xs lg:text-sm leading-loose text-gray-300 px-0 lg:px-3">
                                <li className="mb-2">
                                    <NavLink to="/#features" className="link_hover_border_bottom">FEATURES</NavLink>
                                </li>
                                <li className="mb-2">
                                    <Link to="/#benefits" className="link_hover_border_bottom">BENEFITS</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="link_hover_border_bottom">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 px-8 text-center lg:text-left">
                            <Link to="/#features" className="text-base lg:text-xl font-bold text-gray-800 mt-3">
                                Features
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="w-1/2 px-8 text-center lg:text-left">
                            <Link to="/#benefits" className="text-base lg:text-xl font-bold text-gray-800 mt-3">
                                Benefits
                            </Link>
                        </div>
                        <div className="w-1/2 px-8 text-center lg:text-left">
                            <Link to="/privacy-policy" className="text-base lg:text-xl font-bold text-gray-800 mt-3">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row w-full mt-6 lg:mt-0">
                        <div className="w-full px-8 text-center lg:text-left">
                            <Link to="/term-of-services" className="text-base lg:text-xl font-bold text-gray-800 mt-3">
                                Term Of Services
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-400 rounded-md py-10 mt-10 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 my-3 md:my-0">
                        <h2 className="text-2xl text-white text-center font-bold">Stay In Touch</h2>
                    </div>
                    <div className="w-full md:w-1/3 my-3 md:my-0">
                        <div className="justify-center flex flex-col lg:flex-row items-center">
                            <Link to="/" className="mr-4 my-1 lg:my-0 text-xl text-white font-bold"><i className="fa fa-phone"></i>+62 812 1281 922</Link>
                            <Link to="/" className="mr-4 my-1 lg:my-0 text-xl text-white font-bold"><i className="fa fa-phone"></i>+22 7481 2212</Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 container my-3 md:my-0">
                        <div className="flex flex-row items-center">
                            <div className="mx-auto">
                                <Link to="/" className="mr-4"><i className="fab fa-facebook-square text-2xl text-white"></i></Link>
                                <Link to="/" className="mr-4"><i className="fab fa-instagram text-2xl text-white"></i></Link>
                                <Link to="/" className="mr-4"><i className="fab fa-twitter text-2xl text-white"></i></Link>
                                <Link to="/" className="mr-4"><i className="fab fa-linkedin text-2xl text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_copyright container mx-auto px-8 py-6 text-gray-400 text-sm lg:text-base">
                    Copyright © {tahunTerbaru} HaloDesk Pte Ltd. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
