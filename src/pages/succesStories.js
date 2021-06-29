import React from 'react'
import wave1 from '../assets/images/wave1.png';
import wave2 from '../assets/images/wave2.png';
import TheNextLevel from '../assets/images/the-next-level-ss.jpg'
import TechJDI from '../assets/images/tech-jdi.jpg'
import MasonCO from '../assets/images/mason-and-co.jpg'
import Announcement from '../components/Announcement';

export default function succesStories() {
    return (
        <div>
            <div className="success_stories px-12 lg:px-20 my-32 lg:my-36">
                    <div className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 absolute top-0 right-0" style={{zIndex: -10}}>
                        <img src={wave1} alt="Wave one" draggable="false" />
                    </div>
                    <div className="absolute bottom-40 -left-1" style={{zIndex: -10}}>
                        <img src={wave2} alt="Wave one" draggable="false" />
                    </div>
                <div className="container mx-auto text-start lg:text-center">
                    <h1 className="text-gray-800 font-bold text-4xl"><span className="text-underline-bold">Success</span> stories</h1>
                    <p className="mt-4 text-gray-800 text-base font font-normal lg:text-xl">of our happy clients</p>
                </div>
                <div className="container mx-auto flex flex-col lg:flex-row mt-20 lg:mt-32">
                    <div className="happy_client w-full lg:w-1/3 mb-10 lg:mb-0">
                        <img src={TheNextLevel} alt="" className="w-full lg:w-11/12" />
                        <b className="name-with-underline-full mt-2 text-gray-800">The Next Level</b>
                        <p className="text-sm lg:text-lg text-gray-400 mt-2 leading-relaxed">
                            The Next Level provides webinars and seminars for help entrepreneurs in taking their businesses to the next level
                        </p>
                    </div>
                    <div className="happy_client w-full lg:w-1/3 mb-10 lg:mb-0">
                        <img src={TechJDI} alt="" className="w-full lg:w-11/12" />
                        <b className="name-with-underline-full mt-2 text-gray-800">Tech JDI Ltd</b>
                        <p className="text-sm lg:text-lg text-gray-400 mt-2 leading-relaxed">
                            Tech JDI helps start-ups and corporates to swiftly access the resources in the market across Asia.
                        </p>
                    </div>
                    <div className="happy_client w-full lg:w-1/3 mb-10 lg:mb-0">
                        <img src={MasonCO} alt="" className="w-full lg:w-11/12" />
                        <b className="name-with-underline-full mt-2 text-gray-800">Mason & Co</b>
                        <p className="text-sm lg:text-lg text-gray-400 mt-2 leading-relaxed">
                            Mason & Co is an Executive Search and Consultancy firm that delivers excellence in the assessment and coaching fields.
                        </p>
                    </div>
                </div>
            </div>
                <Announcement title="supercharge your sales today" content="Understand how you can Achieve 3× your Sales Revenue by Optimizing your Sales Process with Digital Tools or our Digital Sales Transformation Programme!" />
        </div>
    )
}
