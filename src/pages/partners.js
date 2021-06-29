import React from 'react'
import wave1 from '../assets/images/wave1.png';
import Announcement from '../components/Announcement';

// Training partners image
import nus from '../assets/images/tp_1.png'
import sgtech from '../assets/images/tp_2.png'
import agb from '../assets/images/tp_3.png'
// Technology partners image
import activecampaign from '../assets/images/activecampaign.png'
import twillio from '../assets/images/twilio.png'
import zapier from '../assets/images/zapier.png'
// Marketing partners image
import ownerCircle from '../assets/images/owner-circle.png'
import trustedMalaysia from '../assets/images/trusted-malaysia.png'

export default function partners() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 absolute top-0 right-0" style={{zIndex: -10}}>
                    <img src={wave1} alt="Wave one" draggable="false" />
                </div>
                <div className="w-full lg:w-6/12 mx-auto px-8 pt-10 lg:px-8 mb-40 text-center">
                    <h1 className="text-gray-800 font-bold text-4xl"><span className="text-underline-bold">HelpDesk</span> partners</h1>
                    <p className="my-4 max-w-lg mx-auto text-sm lg:text-base text-gray-400">
                        QuickDesk's partners go further than just optimising the sales and marketing processes and driving revenue for our clients. We create new pathways for understanding and acting upon your needs.
                    </p>
                    <button className="bg-yellow-300 hover:bg-yellow-400 transition-colors mt-3 duration-200 px-10 py-2 rounded-3xl border-0 text-white font-bold text-sm md:text-base">become our partner</button>
                    <div className="my-32 lg:my-52">
                        <h5 className="text-md lg:text-lg tracking-widest text-green font-bold text-center mb-2">TRAINING PARTNERS</h5>
                        <div className="flex flex-col lg:flex-row items-center">
                            <img src={nus} alt="NUS Nationality of Singapore" className="w-1/2 lg:w-4/12" />
                            <img src={sgtech} alt="SGTECH" className="w-1/2 lg:w-4/12" />
                            <img src={agb} alt="AGP Craft Significance" className="w-1/2 lg:w-4/12" />
                        </div>
                    </div>
                    <div className="my-32 lg:my-52">
                        <h5 className="text-md lg:text-lg tracking-widest text-green font-bold text-center mb-2">TECHNOLOGY PARTNERS</h5>
                        <div className="flex flex-col lg:flex-row items-center">
                            <img src={activecampaign} alt="Activecampaign" className="w-1/2 lg:w-4/12" />
                            <img src={twillio} alt="Twillio" className="w-1/2 lg:w-4/12" />
                            <img src={zapier} alt="Zapier" className="w-1/2 lg:w-4/12" />
                        </div>
                    </div>
                    <div className="my-32 lg:mt-52">
                        <h5 className="text-md lg:text-lg tracking-widest text-green font-bold text-center mb-2">MARKETING PARTNERS</h5>
                        <div className="flex flex-col lg:flex-row items-center">
                            <img src={ownerCircle} alt="Activecampaign" className="w-1/2 lg:w-4/12 mx-auto" />
                            <img src={trustedMalaysia} alt="Twillio" className="w-1/2 lg:w-4/12 mx-auto" />
                        </div>
                    </div>
                </div>
                <Announcement title="supercharge your sales today" content="Achieve 3× your Sales Revenue by Optimizing your Sales Process with Digital Tools!" />
            </div>
        </div>
    )
}
