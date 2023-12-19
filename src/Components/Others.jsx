
import mobileGraphicsDesign from '../assets/mobile/image-graphic-design.jpg'
import mobilePhotography from '../assets/mobile/image-photography.jpg'


function Others() {

    const others =[{topic:'Graphic Design',content:"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention",image:mobileGraphicsDesign},
                    {topic:'Photography',content:"Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",image:mobilePhotography},
                    ]

    return (
        <div className='relative'>
        {
            others.map((other,key)=>{
                return(
                    <div key={key} className={`relative flex flex-col justify-center items-center ${other.topic==='Photography'? 'text-Darkblue(photographytext)':'text-Darkdesaturatedcyan(graphicdesigntext)'}`}>
                        <img src={other.image} alt="image" className='w-[100%] h-[100%]'/>
                        <div className={`absolute top-[22rem] sm:top-[42rem]`}>
                        <h1 className='font-extrabold text-[2rem] sm:text-[3.5rem] mt-[3.5rem] sm:mt-[4rem] mb-[1.5rem] sm:mb-[2rem] font-FrauncesFont'>{other.topic}</h1>
                        <p className='px-[1.3rem] text-[0.9rem] sm:text-[1.4rem] font-semibold font-BarlowFont'>{other.content}</p>
                        </div>
                    </div>
                )
            })
        }
       </div>
    );
}

export default Others;
