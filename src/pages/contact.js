import React from 'react'
import wave1 from '../assets/images/wave1.png';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo_halodesk.png';

export default function Contact() {
    return (
        <div>
            <div className="container items-center mx-auto flex flex-col lg:flex-row px-8 mb-40 lg:px-24 pt-44">
                <div className="w-8/12 md:w-6/12 lg:w-4/12 xl:w-5/12 absolute top-0 right-0" style={{zIndex: -10}}>
                    <img src={wave1} alt="Wave one" draggable="false" />
                </div>
                <div className="contact w-full lg:w-1/2 px-0 lg:px-8 mx-auto">
                    <div className="">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            Lets Contact us for <span className="text-underline-bold">Experience</span>
                        </h2>
                        <p className="text-sm lg:text-base text-gray-400 mt-4">
                            Fill your data for get experience with HaloDesk. Enjoy testing every feature from our All-Inclusive plan starting today.
                        </p>
                        <div className="badge mt-4 inline-flex">
                            <div className="badge-item px-2 text-center text-white py-1 text-xs bg-green-600 rounded-xl w-28 mr-2">
                                14 Day Trials
                            </div>
                            <div className="badge-item px-2 text-center text-white py-1 text-xs bg-yellow-400 rounded-xl w-44">
                                No Credit Card required
                            </div>
                        </div>
                    </div>
                    <div className="contact__steps py-6 w-full bg-white rounded-2xl">
                        <div className="contact__form my-6">
                            <div className=''>
                                <div className="contact__form_control">
                                    <label htmlFor="first_name" className="contact__form_label font-bold text-lg">First Name <span className="text-red-400">*</span></label>
                                    <input type="text" className="form_input_helpdesk" />
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="last_name" className="contact__form_label font-bold text-lg">Last Name <span className="text-red-400">*</span></label>
                                    <input type="text" className="form_input_helpdesk" />
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="company_name" className="contact__form_label font-bold text-lg">Company Name <span className="text-red-400">*</span></label>
                                    <input type="text" className="form_input_helpdesk" />
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="phone" className="contact__form_label font-bold text-lg">Phone <span className="text-red-400">*</span></label>
                                    <input type="text" className="form_input_helpdesk" />
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="email" className="contact__form_label font-bold text-lg">Email <span className="text-red-400">*</span></label>
                                    <input type="email" className="form_input_helpdesk" />
                                </div>
                                <div className="border-b border-dotted border-gray-100"></div>
                                <div className="flex items-center my-4">
                                    <input type="checkbox" className="form_input_helpdesk" id="information"/>
                                    <label htmlFor="information" className="contact__form_label text-sm ml-2 text-gray-400 cursor-pointer">Send me Updated information of HaloDesk</label>
                                </div>
                            </div>
                            <div className="my-4">
                                <button className="bg-green hover:bg-green-600 transition-colors duration-500 px-6 py-4 text-white rounded-md w-full">Contact Now</button>
                                <p className="my-2 text-sm text-gray-400">By Contact Us, I Accept <Link to="/term-of-services" className="link_hover_border_bottom font-semibold">Term Of Service</Link> & <Link to="/privacy-policy" className="link_hover_border_bottom font-semibold">Privacy Policy</Link></p>
                            </div>
                            <div className="mt-14 flex items-center justify-around">
                                <img src={Logo} alt="Logo Halodesk" className="w-28 mr-3"/>
                                <img src={Logo} alt="Logo Halodesk" className="w-28 mx-3"/>
                                <img src={Logo} alt="Logo Halodesk" className="w-28 mx-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
