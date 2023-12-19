import mobileHeader from '../assets/mobile/image-header.jpg'
import arrowDown from '../assets/icon-arrow-down.svg'
import Testimonials from './Testimonials'
import Others from './Others'
import LearnMore from './LearnMore';
import Gallery from './Gallery';
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter } from "react-icons/io";


function Body() {

    return (
        <div className="text-center font-BarlowFont">
            <main>
                <header className='text-White relative'>
                    <h1 className='absolute w-full top-[8rem] font-extrabold text-[3rem] leading-[3.4rem] tracking-[0.5rem] font-FrauncesFont'>WE ARE CREATIVES</h1>
                    <img src={arrowDown} alt="" className='absolute top-[19rem] right-[10.7rem]'/>
                    <img src={mobileHeader} alt="image" className='z-30'/>
                </header>
                <div>
                    <LearnMore/>
                    <Others/>
                </div>
                <Testimonials/>
                <Gallery/>
            </main>
            <footer className='flex flex-col items-center bg-Darkmoderatecyan(footer) text-Darkdesaturatedcyan(graphicdesigntext) py-[4rem]'>
                <h1 className='font-extrabold text-[2rem] mb-[2rem]'>sunnyside</h1>
                <ul className='flex gap-[4rem] font-semibold text-[1.1rem] mb-[4rem]'>
                    <li className='footerText'>About</li>
                    <li className='footerText'>Services</li>
                    <li className='footerText'>Projects</li>
                </ul>
                <section className='flex gap-[1.7rem] text-[1.6rem]'>
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