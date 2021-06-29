import React from 'react'
import wave1 from '../assets/images/wave1.png';
import wave2 from '../assets/images/wave2.png';
import CharmainTanImage from '../assets/images/about-us-hero-img.png';
import Announcement from '../components/Announcement';

export default function About() {
    return (
        <div>
            <main className="z-50">
                <div className="jumbotron_about_us flex flex-col lg:flex-row items-center container mx-auto px-12 lg:px-20">
                    <div className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 absolute top-0 right-0" style={{zIndex: -10}}>
                        <img src={wave1} alt="Wave one" draggable="false" />
                    </div>
                    <div className="absolute bottom-40 -left-1" style={{zIndex: -10}}>
                        <img src={wave2} alt="Wave one" draggable="false" />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-24">
                        <h5 className="text-base tracking-wide text-green font-bold mb-2">ABOUT US</h5>
                        <h1 className="text-3xl lg:text-4xl font-bold leading-relaxed max-w-lg">helping businesses & professionals achieve more sales through <span className="text-underline-bold">education</span> & <span className="text-underline-bold">technology</span></h1>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src={CharmainTanImage} alt="Charmain tan" />
                    </div>
                </div>
                <div className="container mx-auto px-12 lg:px-20 mt-32 lg:mt-36">
                    <div className="w-full lg:w-1/2 mx-auto">
                        <h5 className="text-base tracking-wide text-green font-bold mb-2">ABOUT QUICKDESK</h5>
                        <h1 className="text-3xl lg:text-4xl font-bold leading-relaxed max-w-2xl"><span className="text-underline-bold">empower</span> businesses to drive more sales through technology and education</h1>
                        <p className="text-base lg:text-lg text-gray-400 mt-6">
                            At QuickDesk, we seek to empower businesses to drive more sales through technology and education.
                        </p>
                        <p className="text-base lg:text-lg text-gray-400 mt-6">
                            QuickDesk started in 2014, with a simple mission of helping sales people to achieve more sales with less and hence we developed a customer relationship management (CRM) software. However we realised that what many sales people are looking for is leads. Without leads, they have no info for their CRM.
                        </p>
                        <p className="text-base lg:text-lg text-gray-400 mt-6">
                            Hence in 2018 QuickDesk started to generate leads and prospect for clients. It was great to generate quality prospects for clients. However, we realised it was not sustainable, we could not grow with them.
                        </p>
                        <p className="text-base lg:text-lg text-gray-400 mt-6">
                            There was this saying: <span className="font-bold text-gray-800">Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.</span>
                        </p>
                        <p className="text-base lg:text-lg text-gray-400 mt-6">
                            Hence by end of 2018, we decided to consolidate all of our experiences from offering CRM and Leads to Clients into an education programme. We believe that education plays a pivotal role in fulfilling every business dream of driving more sales. Our programmes include Digital Sales Transformation and Professional Conversion Programme for Digital Sales Executive to teach professionals how to digitise their sales process and sell with the RIGHT values.
                        </p>
                        <p className="text-base lg:text-lg text-gray-400 mt-6">
                            Many prospects ask us, so how are we different?. Truth be told its our WHY and HOW that sets us apart. It’s down to our attitude, our approach and the way we treat clients. Our commitment is to journey with you in your own transformation to drive more sales as your trusted advisor and partner.
                        </p>
                        <p className="text-base lg:text-lg text-gray-400 font-bold mt-6">
                            Our vision to empower and impact businesses globally stays true every single step of our way till today. We care about your success and it’s our mission to grow in this journey together with you.
                        </p>
                    </div>
                </div>
                <Announcement title="supercharge your sales today" content="Understand how you can Achieve 3× your Sales Revenue by Optimizing your Sales Process with Digital Tools or our Digital Sales Transformation Programme!" />
            </main>
        </div>
    )
}
