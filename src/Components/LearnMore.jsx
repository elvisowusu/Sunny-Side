
import mobileTransform from '../assets/mobile/image-transform.jpg'
import mobileStandOut from '../assets/mobile/image-stand-out.jpg'

function LearnMore() {
    const info =[{image:mobileTransform,alt:'transform image',topic:"Transform your brand",content:"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."},
                {image:mobileStandOut, alt:'standout image',topic:"Stand out to the right audience",content:"Using a collaborative formula of designers, researcher, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."}
                ]

    return (
        <div>{
                info.map((info,key)=>{
                    return(
                        <div key={key}>
                            <img src={info.image} alt="" />
                            <div className='py-[4rem] flex flex-col items-center'>
                                <h1 className='text-[2rem] px-[3rem] leading-[2.4rem] font-extrabold font-FrauncesFont mb-[1.6rem]'>{info.topic}</h1>
                                <p className='px-[1.3rem] font-semibold mb-[2rem]'>{info.content}</p>
                                <div className='leading-[0.2rem]'>
                                    <span className='font-extrabold tracking-wide font-FrauncesFont'>LEARN MORE</span>
                                    <hr className='opacity-40 rounded border-none h-[0.6rem] w-[8rem] bg-Yellow'/>
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