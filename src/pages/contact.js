import axios from 'axios';
import React, { useEffect, useState } from 'react'
import wave1 from '../assets/images/wave1.png';

export default function Contact() {
    const [countries, setCountries] = useState([]);
    const [progresbar, setProgresbar] = useState(1);
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setCountries(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })
    const changePage = () => {
        setProgresbar(progresbar + 1);
    }
    const prevPage = () => {
        setProgresbar(progresbar - 1);
    }
    return (
        <div>
            <div className="container items-center mx-auto flex flex-col lg:flex-row px-8 mb-40 lg:px-24">
                <div className="w-8/12 md:w-6/12 lg:w-4/12 xl:w-5/12 absolute top-0 right-0" style={{zIndex: -10}}>
                    <img src={wave1} alt="Wave one" draggable="false" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="">
                        <h5 className="text-sm tracking-wide text-green font-bold">ABOUT US</h5>
                        <h2 className="text-3xl lg:text-4xl leading-snug font-bold">
                            lets make your <span className="text-underline-bold">business</span> <br /> flow with sales
                        </h2>
                        <p className="text-gray-400 mt-3">Email : <span className="text-green font-semibold">contact@helpdesk.io</span></p>
                        <div className="my-8">
                            <h5 className="text-sm tracking-wide text-green font-bold">SINGAPORE</h5>
                            <p className="max-w-xs text-gray-400">
                                59 Ubi Ave 1 #04-07, Singapore 408938
                            </p>
                        </div>
                        <div className="my-8">
                            <h5 className="text-sm tracking-wide text-green font-bold">MALAYSIA</h5>
                            <p className="max-w-xs text-gray-400">
                                Suite 10-02, Block B, Phileo Damansara 1,
                                No. 9, Jalan 16/11, 46350 Petaling Jaya,
                                Selangor Darul Ehsan, Malaysia.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact w-full lg:w-1/2">
                    <div className="contact__steps px-6 py-16 w-full lg:w-9/12 bg-white rounded-2xl">
                        <h5 className="text-sm text-gray-400 font-bold">Step 1 of 2</h5>
                        <div className="shadow w-full bg-gray-100 px-2 py-2 my-2 rounded-2xl">
                            <div className="shadow w-full bg-gray-200 rounded-2xl border-2 border-gray-100">
                                <div className={['bg-green rounded-2xl text-xs leading-none py-2 font-bold text-white', progresbar === 1 ? 'text-center' : 'text-right'].join(" ")} style={{width: progresbar === 1 ? '50%' : '100%'}}>{progresbar === 1 ? '50%' : '100%'}</div>
                            </div>
                        </div>
                        <div className="contact__form my-6">
                            <div className={progresbar === 1 ? 'show' : 'hidden'}>
                                <h3 className="text-gray-400">Fill in your details.</h3>
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
                                <div className="contact__form_control">
                                    <label htmlFor="country" className="contact__form_label font-bold text-lg">Country <span className="text-red-400">*</span></label>
                                    <select name="country" className="form_input_helpdesk">
                                        {
                                            countries.map((item, index) => {
                                                return (
                                                    <option value={item.alpha3Code} key={index}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="border-b border-dotted border-gray-100"></div>
                            </div>
                            <div className={progresbar === 2 ? 'show' : 'hidden'}>
                                <h3 className="text-gray-400">Tell us more about your sales process!</h3>
                                <div className="contact__form_control">
                                    <label htmlFor="first_name" className="contact__form_label font-bold text-lg">How many sales and marketing team do you have? <span className="text-red-400">*</span></label>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">1 - 10</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">11 - 25</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">26 - 50</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">51 - 100</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">101 - 500</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">501 and above</span>
                                    </div>
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="last_name" className="contact__form_label font-bold text-lg">What are you looking to solve? <span className="text-red-400">*</span></label>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">I want my sales team to be trained digitally</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">I want to digitize my sales and marketing process</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">Both of the above</span>
                                    </div>
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="company_name" className="contact__form_label font-bold text-lg">What specific outcomes are you looking to obtain? <span className="text-red-400">*</span></label>
                                    <input type="text" className="form_input_helpdesk" />
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="phone" className="contact__form_label font-bold text-lg">Where did you hear about us? <span className="text-red-400">*</span></label>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">1 - 10</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">11 - 25</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">26 - 50</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">51 - 100</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">101 - 500</span>
                                    </div>
                                    <div className="contact_form_checkbox flex items-center my-1">
                                        <input type="checkbox" className="form_input_helpdesk" />
                                        <span className="ml-3 text-sm text-gray-400">501 and above</span>
                                    </div>
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="email" className="contact__form_label font-bold text-lg">If you choose others, please specify:</label>
                                    <input type="email" className="form_input_helpdesk" />
                                </div>
                                <div className="contact__form_control">
                                    <label htmlFor="country" className="contact__form_label font-bold text-lg">If you choose webinar, in which webinar did you hear about us?</label>
                                    <input type="text" className="form_input_helpdesk" />
                                </div>
                                <div className="border-b border-dotted border-gray-100"></div>
                            </div>
                            <div className="my-4">
                                {
                                    progresbar === 1 ? <button className="bg-green px-6 py-2 text-white rounded-md" onClick={changePage}>Next</button> : <div><button className="bg-green px-6 py-2 text-white rounded-md mr-4" onClick={prevPage}>Previous</button> <button className="bg-green px-6 py-2 text-white rounded-md">Submit</button></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
