import { useEffect,useReducer } from "react";
import Mylogo from "../Assets/logo.svg";
import { NavItems } from "./NavItems";
import Menu from "../Assets/icon-hamburger.svg";

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
        <div className={`fixed w-full flex items-center justify-between pt-[2rem] px-[1.5rem] sm:bg-green-400 md:bg-red-400 lg:bg-pink-400 z-30`}>
          <div>
            <img src={Mylogo} alt="logo" />
          </div>
          <div>
            {state.screenWidth > 768 ? 
                <NavItems /> : 
                <button onClick={()=>dispatch({type: "SET_CLICKED", payload: !state.clicked})} className={`text-white`}> <img src={Menu} alt="" /> </button>
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