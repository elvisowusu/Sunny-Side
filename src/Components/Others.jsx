
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
                    <div key={key} className='relative flex flex-col justify-center items-center'>
                        <img src={other.image} alt="image" className='w-[100%] h-[100%]'/>
                        <div className={`absolute top-[22rem]`}>
                        <h1 className='font-extrabold text-[2rem] mt-[3.5rem] mb-[1.5rem] font-FrauncesFont'>{other.topic}</h1>
                        <p className='px-[1.3rem] text-[0.9rem] font-semibold font-BarlowFont'>{other.content}</p>
                        </div>
                    </div>
                )
            })
        }
       </div>
    );
}

export default Others;
