import Emily from '../assets/image-emily.jpg'
import Thomas from '../assets/image-thomas.jpg'
import Jennie from '../assets/image-jennie.jpg'


function Testimonials() {

    const clients =[
                    {id:1,Image:Emily,Statement:'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',Name:'Emily R.',Ocuupation:'Marketing Director'},
                    {id:2,Image:Thomas,Statement:"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",Name:'Thomas S.',Ocuupation:'Chief Operating Officer'},
                    {id:3,Image:Jennie,Statement:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!", Name:"Jennie F.",Ocuupation:"Business Owner"},
                   ]


    return (
           <div className='text-center font-BarlowFont'>
            <h1 className='font-extrabold font-FrauncesFont mt-[3.5rem] sm:mt-[4rem] text-[1.3rem] sm:text-[2rem] tracking-[0.2rem] sm:tracking-[0.4rem] mb-[4rem] sm:mb-[5rem] text-Grayishblue'>CLIENT TESTIMONIALS</h1>
            {
                clients.map((client,key)=>
                    <div key={key} className='flex flex-col justify-center items-center mb-[4.5rem] sm:mb-[5rem]'>
                            <img src={client.Image} alt="image" className='block rounded-full w-[4.6rem] sm:w-[6.5rem] mb-[2.5rem] sm:mb-[3.5rem]'/>
                            <p className='text-[1.1rem] sm:text-[1.4rem] font-semibold px-[1rem] sm:px-[2rem] text-Verydarkgrayishblue md:w-[31rem]'>{client.Statement}</p>
                            <h3 className='mt-[1.5rem] sm:mt-[2rem] font-extrabold font-FrauncesFont text-lg sm:text-[1.5rem] text-Verydarkdesaturatedblue'>{client.Name}</h3>
                            <p className='font-semibold text-sm sm:text-[1.3rem] mt-[0.6rem] sm:mt-[1rem] text-Grayishblue'>{client.Ocuupation}</p>
                    </div>
                )
            }
           </div>
    );
}

export default Testimonials;