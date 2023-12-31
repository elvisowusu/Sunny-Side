import mobileHeader from '../assets/mobile/image-header.jpg'
import desktopHeader from '../assets/desktop/image-header.jpg'
import arrowDown from '../assets/icon-arrow-down.svg'
import Testimonials from './Testimonials'
import Others from './Others'
import LearnMore from './LearnMore';
import Gallery from './Gallery';
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter } from "react-icons/io";
import React,{ useEffect, useState } from 'react'

export const ScreenWidthContext = React.createContext()

function Body() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="text-center font-BarlowFont">
            <main>
                <header className='text-White relative'>
                    <h1 className='absolute w-full top-[8rem] sm:top-[12rem] md:top-[8rem] font-extrabold text-[3rem] sm:text-[6rem] md:text-[2.3rem] leading-[3.4rem] sm:leading-[7rem] tracking-[0.5rem] md:tracking-[0.3rem] font-FrauncesFont'>WE ARE CREATIVES</h1>
                    <img src={arrowDown} alt="" className='absolute top-[19rem] sm:top-[30.5rem] md:top-[15rem] sm:w-[6rem] md:w-[2rem] right-[10.7rem] sm:right-[20rem] md:right-[30rem]'/>
                    <img src={screenWidth < 768 ? mobileHeader : desktopHeader} alt="image" className='z-30'/>
                </header>
                <div>
                    <ScreenWidthContext.Provider value={screenWidth}>
                        <LearnMore/>
                        <Others/>
                    </ScreenWidthContext.Provider>
                </div>
                    <Testimonials/>
                <ScreenWidthContext.Provider value={screenWidth}>
                    <Gallery/>
                </ScreenWidthContext.Provider>
            </main>
            <footer className='flex flex-col items-center bg-Darkmoderatecyan(footer) text-Darkdesaturatedcyan(graphicdesigntext) py-[4rem]'>
                <h1 className='font-extrabold text-[2rem] sm:text-[3rem] mb-[2rem]'>sunnyside</h1>
                <ul className='flex gap-[4rem] sm:gap-[6rem] font-semibold text-[1.1rem] sm:text-[1.3rem] mb-[4rem]'>
                    <li className='footerText'>About</li>
                    <li className='footerText'>Services</li>
                    <li className='footerText'>Projects</li>
                </ul>
                <section className='flex gap-[1.7rem] sm:gap-[2rem] text-[1.6rem] sm:text-[2rem]'>
                    <a href="https://www.facebook.com"><IoLogoFacebook className='footerText'/></a>
                    <a href="https://www.instagram.com"><IoLogoInstagram className='footerText'/></a>
                    <a href="https://www.twitter.com"><IoLogoTwitter className='footerText'/></a>
                    <a href="https://www.pinterest.com"><IoLogoPinterest className='footerText'/></a>
                </section>
            </footer>
        </div>
    );
}

export default Body;