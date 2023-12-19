export const NavItems = ()=>{

    const items =["About", "Services","Projects","CONTACT"]

    return(
        <ul className="fixed NavItems ">
        <div className="fixed border-l-[2.5rem] border-l-transparent border-b-White border-b-[3rem] right-[1.37rem] top-[4.5rem]"></div>
            {items.map((item,index)=>{
                return <li className={`${index!=3?'OtherList':'contact'}`} key={index}>{item}</li>
            })}
        </ul>
    )
}