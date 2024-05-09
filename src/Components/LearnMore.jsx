import { useContext } from 'react'
import mobileTransform from '../assets/mobile/image-transform.jpg'
import mobileStandOut from '../assets/mobile/image-stand-out.jpg'
import desktopTransform from '../assets/desktop/image-transform.jpg'
import desktopStandOut from '../assets/desktop/image-stand-out.jpg'
import { ScreenWidthContext } from './Body'

function LearnMore() {
    const info =[{image:mobileTransform,image2:desktopTransform,alt:'transform image',topic:"Transform your brand",content:"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."},
                {image:mobileStandOut,image2:desktopStandOut, alt:'standout image',topic:"Stand out to the right audience",content:"Using a collaborative formula of designers, researcher, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."}]
        
    const screenWidth = useContext(ScreenWidthContext)
    return (
        <div>{
                info.map((info,key)=>{
                    return(
                        <div className='md:grid md:grid-cols-2' key={key}>
                            <img src={screenWidth < 768 ? info.image:info.image2 } alt="" />
                            <div className='py-[4rem] sm:py-[6rem] md:py-[6rem] flex flex-col items-center md:items-start md:text-left md:px-[4rem]'>
                                <h1 className='text-[2rem] sm:text-[2.5rem] md:text-[2rem] px-[3rem] md:px-0 leading-[2.4rem] font-extrabold font-FrauncesFont mb-[1.6rem] sm:mb-[3rem] md:mb-[2rem] text-Verydarkdesaturatedblue'>{info.topic}</h1>
                                <p className='px-[1.3rem] md:px-0 sm:text-[1.5rem] md:text-[1.1rem] font-semibold mb-[2rem] sm:mb-[3.5rem] md:mb-[2rem] text-Darkgrayishblue'>{info.content}</p>
                                <div className='group/main leading-[0.2rem] sm:leading-[0rem] md:leading-[0.4rem] cursor-pointer'>
                                    <span className='font-extrabold tracking-wide font-FrauncesFont sm:text-[1.3rem] md:text-[1.1rem] text-Verydarkdesaturatedblue'>LEARN MORE</span>
                                    <hr className={`opacity-30 group-hover/main:opacity-50 rounded border-none h-[0.6rem] w-[8rem] sm:w-[10.5rem] md:w-[8.5rem] ${info.image ===mobileStandOut?'bg-Softred':'bg-Yellow'}`}/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default LearnMore;