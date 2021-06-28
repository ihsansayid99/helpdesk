import React from 'react'
import {Link} from 'react-router-dom';
import logoHelpdesk from '../assets/images/logo_helpdesk.png';
import wave1 from '../assets/images/wave1.png';
import wave2 from '../assets/images/wave2.png';
import {ReactComponent as Blob} from '../assets/images/blob.svg';
import {ReactComponent as Increase} from '../assets/images/increase.svg';
import {ReactComponent as HigherCustomer} from '../assets/images/higher-customer.svg';
import {ReactComponent as CustomerRate} from '../assets/images/customer-rate.svg';
import KeyFeatures1 from '../assets/images/keyfeatures1.png';
import KeyFeatures2 from '../assets/images/keyfeatures2.png';
import KeyFeatures3 from '../assets/images/keyfeatures3.png';
import KeyFeatures4 from '../assets/images/keyfeatures4.png';
import {ReactComponent as BenefitsIcon1} from '../assets/images/icon-benefits-1.svg';
import {ReactComponent as BenefitsIcon2} from '../assets/images/icon-benefits-2.svg';
import {ReactComponent as BenefitsIcon3} from '../assets/images/icon-benefits-3.svg';
import {ReactComponent as BenefitsIcon4} from '../assets/images/icon-benefits-4.svg';
import {ReactComponent as BenefitsIcon5} from '../assets/images/icon-benefits-5.svg';
import {ReactComponent as BenefitsIcon6} from '../assets/images/icon-benefits-6.svg';
import imageJumbotronHomepage from '../assets/images/img_jumbotron_homepage.png';
import imageSection3Homepage from '../assets/images/section-3.png';
import WhyChoose from '../assets/images/why-choose.png';
import SfExpress from '../assets/images/logo-sfexpress.png';
import announcement from '../assets/images/announcement.png';

import client1 from '../assets/images/client-1.png';
import client2 from '../assets/images/client-2.png';
import client3 from '../assets/images/client-3.png';
import client4 from '../assets/images/client-4.png';
import client5 from '../assets/images/client-5.png';
import client6 from '../assets/images/client-6.png';
import client9 from '../assets/images/client-9.png';
import client10 from '../assets/images/client-10.png';
import client11 from '../assets/images/client-11.png';
import client12 from '../assets/images/client-12.png';
import client13 from '../assets/images/client-13.png';
import client14 from '../assets/images/client-14.png';
import client15 from '../assets/images/client-15.png';

export default function Homepage() {
    return (
        <div>
            <main>
                <div className="jumbotron_homepage flex flex-col-reverse lg:flex-row items-center container mx-auto px-12 lg:px-20">
                <div className="w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 absolute top-0 right-0" style={{zIndex: -10}}>
                    <img src={wave1} alt="Wave one" draggable="false" />
                </div>
                <div className="absolute bottom-40 -left-1" style={{zIndex: -10}}>
                    <img src={wave2} alt="Wave one" draggable="false" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-tight max-w-xl">Smart Customer Engagement Solution For The Modern Enterprise In Singapore</h1>
                    <p className="mt-4 max-w-xl leading-relaxed text-gray-400">Designed to help businesses deliver a seamless and immersive customer experience through a unified platform.</p>
                </div>
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <img src={imageJumbotronHomepage} alt="Jumbtron homepage images" className="w-full xl:w-3/4 mt-2 lg:-mt-32" />
                </div>
                </div>
                <div className="our-client my-20 ">
                <h5 className="text-base tracking-wide text-green font-bold text-center mb-8">Our Client</h5>
                <div className="our-client__image container mx-auto flex flex-row lg:flex-col">
                    <div className="w-1/2 flex flex-col lg:flex-row justify-center mx-auto mb-8">
                    <img src={client1} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client2} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client3} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client4} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client5} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client6} alt="" className="w-24 mx-auto lg:mx-8 my-4"  />
                    </div>
                    <div className="w-1/2 flex flex-col lg:flex-row justify-center mx-auto">
                    <img src={client9} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client10} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client11} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client12} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client13} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client14} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    <img src={client15} alt="" className="w-24 mx-auto lg:mx-8 my-4" />
                    </div>
                </div>
                </div>
                <div className="power-simplicity container mx-auto px-8 my-20">
                <div className="absolute -left-80 xl:-left-10 mt-44 lg:mt-20" style={{zIndex: -10}}>
                    <Blob/>
                </div>
                <h5 className="text-base tracking-wide text-green font-bold text-center mb-2">Power & Simplicity</h5>
                <h2 className="text-3xl text-center font-bold text-gray-800">Power and Simplicity. All in One Platform.</h2>
                <p className="text-center my-2 mx-auto max-w-4xl text-gray-400 leading-relaxed">
                    We know that managing call centers today isn't easy. Most call centers struggle with slow or non-existent improvements in KPI performance, and lack of consistency among agents. That's why we have decided to build Moobidesk Enterprise - the call center solution for boosting performance and agents productivity using one simplified platform.
                </p>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2">
                    <img src={imageSection3Homepage} alt="" className="mt-5" />
                    </div>
                    <div className="w-full lg:w-1/2">
                    <p className="my-6 text-gray-800 text-lg font-bold text-justify leading-relaxed">
                        Moobidesk connects all essential communication channels on a single platform. We make it fast and easy for you to handle sales and customer support by automating your entire customer engagement. With our omnichannel contact centre solution, logging a case ticket or storing chat histories into your CRM is also seamless, with ready-made APIs to be integrated into your systems quickly and efficiently.
                    </p>
                    </div>
                </div>
                </div>
                <div className="power-simplicity container mx-auto px-8 mt-24 lg:mt-48">
                <h5 className="text-base tracking-wide text-green font-bold text-center mb-2">Engagement Solution</h5>
                <h2 className="text-3xl text-center font-bold text-gray-800 max-w-2xl mx-auto">Why successful businesses adopt Moobidesk's omnichannel engagement solution</h2>
                <div className="flex flex-col lg:flex-row items-center my-20">
                    <div className="w-full lg:w-1/3 pb-6">
                        <div className="flex items-center justify-start lg:justify-center">
                            <div className="pr-4">
                                <Increase />
                                </div>
                                <div className="">
                                <h3 className="text-3xl text-green font-bold">10%</h3>
                                <p className="text-gray-400">Increase in sales revenue</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 pb-6">
                        <div className="flex items-center justify-start lg:justify-center">
                            <div className="pr-4">
                                <HigherCustomer/>
                                </div>
                                <div className="">
                                <h3 className="text-3xl text-green font-bold">23%</h3>
                                <p className="text-gray-400">Higher customer satisfaction score</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 pb-6">
                        <div className="flex items-center justify-start lg:justify-center">
                            <div className="pr-4">
                                <CustomerRate/>
                                </div>
                                <div className="">
                                    <h3 className="text-3xl text-green font-bold">89%</h3>
                                <p className="text-gray-400">Customer retention rate</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="power-simplicity container mx-auto px-8 mt-20 lg:mt-48">
                    <h5 className="text-base tracking-wide text-green font-bold text-center mb-2">Features</h5>
                    <h2 className="text-3xl text-center font-bold text-gray-800 max-w-2xl mx-auto">Key features of Moobidesk Enterprise</h2>
                    <p className="mt-4 max-w-xl leading-relaxed text-gray-400 mx-auto text-center">Learn how Moobidesk makes your agents’ lives easier, your contact center more efficient, and your customers happier</p>
                    <div className="flex flex-col-reverse lg:flex-row items-center my-8 lg:my-20">
                        <div className="w-full lg:w-1/2 py-6">
                            <h3 className="text-xl text-green font-bold">UNIFIED VOICE & CHAT CHANNELS</h3>
                            <h2 className="text-2xl text-gray-800 font-bold mt-2">A TRULY CONNECTED CUSTOMER EXPERIENCE.</h2>
                            <p className="text-lg mt-3 max-w-lg">
                            Orchestrate the best customer experience across all channels on one platform. You get to choose the right communication channels that best fit your business needs and respond to those channels from a <b>single interface</b>.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 py-6">
                            <img src={KeyFeatures1} alt="" width="600" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center my-8 lg:my-20">
                        <div className="w-full lg:w-1/2 py-6">
                            <img src={KeyFeatures2} alt="" width="600" />
                        </div>
                        <div className="w-full lg:w-1/2 py-6">
                            <h3 className="text-xl text-yellow-300 font-bold">SMART AI OMINICHANNEL ROUTING</h3>
                            <h2 className="text-2xl text-gray-800 font-bold mt-2">SEAMLESS BOT TO AGENT TRANSITION.</h2>
                            <p className="text-lg mt-3 max-w-lg">
                                As soon as someone connects with your business, Moobidesk bot intelligently engages and services the customer. When it comes to complex requests, Moobidesk bot transfers control of the chat or call to a live agent automatically.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row items-center my-8 lg:my-20">
                        <div className="w-full lg:w-1/2 py-6">
                            <h3 className="text-xl text-green font-bold">CUSTOMIZABLE WORKFLOW</h3>
                            <h2 className="text-2xl text-gray-800 font-bold mt-2">EFFORTLESS TO SETUP. TWEAK ANYTIME.</h2>
                            <p className="text-lg mt-3 max-w-lg">
                                The world of contact center is complex - that’s why we make it ultra-simple for you to create an optimal ticketing system. You can add agents, set up channels, SLA, queue, skill set, aux code, and chat routing at any time.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 py-6">
                            <img src={KeyFeatures3} alt="" width="600" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center my-8 lg:my-20">
                        <div className="w-full lg:w-1/2 py-6">
                            <img src={KeyFeatures4} alt="" width="600" />
                        </div>
                        <div className="w-full lg:w-1/2 py-6">
                            <h3 className="text-xl text-green font-bold">VISUALLY SATISFYING DASHBOARDS</h3>
                            <h2 className="text-2xl text-gray-800 font-bold mt-2">UNDERSTAND TEAM’S PERFORMANCE AT A GLANCE.</h2>
                            <p className="text-lg mt-3 max-w-lg">
                                Get a quick summary of how your contact center is performing, giving both supervisors and agents a clear understanding of your performance with easily digestible dashboards.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-400 h-44 lg:h-52 py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-white font-bold text-xl lg:text-3xl mb-4 lg:mb-8">Available in the cloud, on premises, or hybrid cloud</h2>
                    <button className="bg-green py-2 lg:py-4 px-6 lg:px-8 text-base lg:text-lg text-white rounded-3xl hover:bg-green-600 transition-all duration-200">Contact Us</button>
                </div>
                </div>
                <div className="container mx-auto px-8 mt-20">
                    <h5 className="text-base tracking-wide text-green font-bold text-center mb-2">Benefits</h5>
                    <h2 className="text-3xl text-center font-bold text-gray-800 max-w-2xl mx-auto">Benefits of Moobidesk</h2>
                    <p className="mt-4 max-w-xl leading-relaxed text-gray-400 mx-auto text-center">What you can expect from our contact center and engagement platform</p>
                    <div className="mt-10 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 bg-green px-4 py-8 flex flex-col items-center rounded-xl mx-2 mb-4 lg:mb-0">
                            <BenefitsIcon1 />
                            <h2 className="text-xl my-2 text-white font-bold mt-4 text-center">Improved agent efficiency and experience</h2>
                            <p className="text-base text-center pb-10 my-2 text-white leading-relaxed">With the integration of multiple channels into one contact center platform, your customer service agents can create consumer-centric experiences and keep track of customer information and respond to customer queries across channels quickly, accurately and easily.</p>
                        </div>
                        <div className="w-full lg:w-1/3 bg-green px-4 py-8 flex flex-col items-center rounded-xl mx-2 mb-4 lg:mb-0">
                            <BenefitsIcon2 />
                            <h2 className="text-xl my-2 text-white font-bold mt-4 text-center">Reduce average handling time</h2>
                            <p className="text-base text-center pb-10 my-2 text-white leading-relaxed">A fast response makes customers feel important. Moobidesk Enterprise contact center solution analyses the incoming message and automatically suggests the best responses to the agents, removing the potential for human error and allowing agents to focus on assisting customers and respond quickly to customer issues.</p>
                        </div>
                        <div className="w-full lg:w-1/3 bg-green px-4 py-8 flex flex-col items-center rounded-xl mx-2 mb-4 lg:mb-0">
                            <BenefitsIcon3 />
                            <h2 className="text-xl my-2 text-white font-bold mt-4 text-center">Improved agent efficiency and experience</h2>
                            <p className="text-base text-center pb-10 my-2 text-white leading-relaxed">An individual customer’s data from any channel they have used is automatically stored on the same interface and database. It makes the customer experience a great one, as it eliminates the need for the customer to repeat information that has been mentioned before.</p>
                        </div>
                    </div>
                    <div className="mt-2 lg:mt-10 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 bg-green px-4 py-8 flex flex-col items-center rounded-xl mx-2 mb-4 lg:mb-0">
                            <BenefitsIcon4 />
                            <h2 className="text-xl my-2 text-white font-bold mt-4 text-center">Significant cost savings</h2>
                            <p className="text-base text-center pb-10 my-2 text-white leading-relaxed">Moobidesk bot can help you to save on customer service costs by speeding up response times, freeing up agents for more challenging work, and answering up to 80% of routine questions.</p>
                        </div>
                        <div className="w-full lg:w-1/3 bg-green px-4 py-8 flex flex-col items-center rounded-xl mx-2 mb-4 lg:mb-0">
                            <BenefitsIcon5 />
                            <h2 className="text-xl my-2 text-white font-bold mt-4 text-center">High levels of scalablilty, reliablility and availablity</h2>
                            <p className="text-base text-center pb-10 my-2 text-white leading-relaxed">Moobidesk Enterprise is a cloud contact center software built on a highly secure, scalable infrastructure and our elasticity allows you to seamlessly grow from 50 agents to 200 agents instantly.</p>
                        </div>
                        <div className="w-full lg:w-1/3 bg-green px-4 py-8 flex flex-col items-center rounded-xl mx-2 mb-4 lg:mb-0">
                            <BenefitsIcon6 />
                            <h2 className="text-xl my-2 text-white font-bold mt-4 text-center">Improved agent efficiency and experience</h2>
                            <p className="text-base text-center pb-10 my-2 text-white leading-relaxed">By streamlining and automating your support process means fewer repeat calls, shorter call times, and quick problem resolution, all contributing to increased support efficiency and the lowering of customer care costs.</p>
                        </div>
                    </div>
                </div>
                <div className="my-32">
                    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-8">
                        <div className="w-full lg:w-1/2">
                        <h2 className="text-gray-800 font-bold text-3xl max-w-lg leading-normal mb-4">Why organisations choose Moobidesk</h2>
                        <p className="mb-4 text-lg max-w-xl">Other customer support software is overly complex and runs on siloed legacy systems. This makes the systems inflexible, resulting in decreased productivity and efficiency.</p>
                        <p className="text-xl font-bold text-gray-800 max-w-xl">Moobidesk is an intuitive modern helpdesk that empowers all to drive desired business outcomes and boost sales faster and easier than ever before.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                        <   img src={WhyChoose} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-8 my-10 lg:my-20">
                    <div className="absolute -left-80 xl:-left-10 -mt-24 lg:-mt-36" style={{zIndex: -10}}>
                        <Blob/>
                    </div>
                    <h5 className="text-base tracking-wide text-green font-bold text-center mb-2">WHAT OUR CLIENTS HAVE TO SAY</h5>
                    <h2 className="text-3xl text-center font-bold text-gray-800">Over 900 businesses automated their sales & marketing with us</h2>
                    <p className="text-center my-2 mx-auto max-w-4xl text-gray-400 leading-relaxed">
                        We care about your success and it's our mission to grow and to walk through the journey with you.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center px-8 mt-28">
                        <div className="w-full lg:w-1/2">
                        <img src={SfExpress} alt="" className="mt-0 lg:mt-5" width="500" />
                        </div>
                        <div className="w-full lg:w-1/2">
                        <p className="my-6 text-gray-800 text-lg font-normal leading-relaxed text-center">
                            “Since we’ve started with Moobidesk Enterprise, communicating and coordinating with customers has become far less time-consuming. The unified contact center platform has saved us the hassle of shuffling between separate systems, and enabled us to connect with our customers with new additional channels.
                        </p>
                        <p className="my-6 text-gray-800 text-lg font-normal leading-relaxed text-center">
                            This has greatly increased our team’s productivity, giving us time to focus on providing our customers with the best experience they can get.”
                        </p>
                        <p className="text-base tracking-wide text-green font-bold mb-2">
                            Maria Chua
                        </p>
                        <p className="text-base tracking-wide text-green font-bold mb-2">
                        Customer Support Manager
                        </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-2 lg:mt-36">
                    <div className="container mx-auto text-center" style={{backgroundImage: "url("+ announcement +")", height: 800, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className="px-28 pt-80">
                        <h5 className="text-base tracking-wide text-green font-bold text-center mb-2">GET A CONSULTATION</h5>
                        <h2 className="text-center text-xl lg:text-3xl max-w-md mx-auto font-bold text-white mt-4">Experience the most innovative and affordable cloud contact center software today</h2>
                        <button className="mt-8 bg-green py-2 lg:py-4 px-6 lg:px-8 text-base lg:text-lg text-white rounded-3xl hover:bg-green-600 transition-all duration-200">Contact Us</button>
                        </div>
                    </div>
                </div>
                <footer className="container mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 px-8">
                            <img src={logoHelpdesk} alt="" width="300" />
                            <h2 className="text-gray-400 leading-relaxed mt-4 text-lg tracking-wide">
                                HelpDesk making businesses flow as we empower and automate your sales through technology and education.
                            </h2>
                            <div className="flex flex-row items-center mt-6">
                                <Link to="/z" className="mr-4"><i class="fab fa-facebook-square text-4xl text-green"></i></Link>
                                <Link to="/" className="mr-4"><i class="fab fa-instagram text-4xl text-green"></i></Link>
                                <Link to="/" className="mr-4"><i class="fab fa-twitter text-4xl text-green"></i></Link>
                                <Link to="/" className="mr-4"><i class="fab fa-linkedin text-4xl text-green"></i></Link>
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
                                    <input type="text" className="border-t-0 border-b-2 border-green px-2 py-2 rounded focus:outline-none focus:bg-gray-500 transition-all duration-300 text-gray-800 text-lg tracking-wide"/>
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="email" className="text-xl text-green font-bold mr-8">Email <span className="text-red-400">*</span></label>
                                    <input type="email" className="border-t-0 border-b-2 border-green px-2 py-2 rounded focus:outline-none focus:bg-gray-500 transition-all duration-300 text-gray-800 text-lg tracking-wide"/>
                                </div>
                                <div className="text-center mt-8">
                                    <button className="px-4 py-2 rounded-3xl text-white bg-green hover:bg-green-600 transition-all duration-200">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/3">
                                <ul className="mt-6 text-base lg:text-xl ml-8 lg:ml-16 leading-loose text-green font-bold">
                                    <li className="">
                                        <Link to="/" className="link_hover_border_bottom ">ABOUT</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">BLOG</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">SUCCESS STORIES</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">CONTACT</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">PRIVACY POLICY</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">TERM OF SERVICE</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">CRM</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">AUTOMATION</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">TRAINING</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="link_hover_border_bottom">USER GUIDE</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="footer_copyright container mx-auto mt-8 px-8 py-6 text-gray-400">
                        Copyright © 2020 HelpDesk Pte Ltd. All rights reserved.
                    </div>
                </footer>
            </main>
        </div>
    )
}
