import React from 'react'
import announcement from '../assets/images/announcement.png';

export default function Announcement({title, content}) {
    return (
        <div>
            <div className="announcement_wrapper container mx-auto my-20 pb-8 lg:my-36">
                <div className="announcement" style={{backgroundImage: "url("+ announcement +")"}}>
                    <div className="pt-28 md:pt-82 lg:pt-82 w-10/12 mx-auto">
                        <h5 className="text-xs md:text-sm lg:text-sm tracking-wide text-green font-bold text-center mb-2">GET A CONSULTATION</h5>
                        <h2 className="text-center text-md md:text-2xl lg:text-3xl mx-auto font-bold text-white mt-4">{title}</h2>
                        <p className="text-center max-w-md mx-auto mt-3 text-sm md:text-lg lg:text-xl text-white">
                            {content}
                        </p>
                        <button className="mt-8 bg-green py-2 px-10 text-base lg:text-lg text-white rounded-3xl hover:bg-green-600 transition-all duration-200">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
