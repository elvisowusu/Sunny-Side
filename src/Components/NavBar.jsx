import { useEffect,useReducer } from "react";
import Mylogo from "../assets/logo.svg";
import { NavItems } from "./NavItems";
import Menu from "../assets/icon-hamburger.svg";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SCREEN_WIDTH":
            return {...state, screenWidth: action.payload};
        case "SET_CLICKED":
            return {...state, clicked: action.payload};
        default:
            return state;
    }

}

function NavBar() {

    const [state, dispatch] = useReducer(reducer,{screenWidth: window.innerWidth, clicked: false});

    useEffect(() => {
        window.addEventListener("resize", () => {
            dispatch({type: "SET_SCREEN_WIDTH", payload: window.innerWidth});
        })
        return () => {
            window.removeEventListener("resize", () => {
                dispatch({type: "SET_SCREEN_WIDTH", payload: window.innerWidth});
            })
        }
    },[])

    return (
        <div className={`fixed w-full flex items-center justify-between pt-[2rem] px-[1.5rem] lg:bg-pink-400 z-30`}>
          <div>
            <img src={Mylogo} alt="logo" className="sm:w-[12rem] md:w-[10rem]"/>
          </div>
          <div>
            {state.screenWidth > 768 ? 
                <NavItems /> : 
                <button onClick={()=>dispatch({type: "SET_CLICKED", payload: !state.clicked})} className={`text-white`}> <img className="sm:w-[2rem]" src={Menu} alt="" /></button>
            }
          </div>
            {state.clicked?
                 <NavItems/>
                 :
                 ''
            }
        </div>
    );
}

export default NavBar;