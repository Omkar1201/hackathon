import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Login from "./Login";
import { NavLink } from "react-router-dom";
const SignUp = () =>{
    const {isLogin,setIsLogin} = useContext(AppContext)
    function LoginHandler(){
        setIsLogin(false);
    }
    return(
    <div class = "container1">

     <div class="container2">
        <form action="">
            <div class="title">Sign Up</div>
            <div class="input-box underline">
                <input type="text" placeholder="Enter Your Name" required/>
                <div class="underline"></div>
              </div>
              <div class="input-box underline">
                <input type="text" placeholder="Enter Your Email" required/>
                <div class="underline"></div>
              </div>
              <div class="input-box underline">
                <input type="tel" maxlength="10" placeholder="Enter Your Mobile no." required/>
                <div class="underline"></div>
              </div>
              <div class="input-box underline">
                <input type="password" placeholder="Enter Password" required/>
                <div class="underline"></div>
              </div>
              <div class="input-box">
                <input type="password" placeholder="Confirm Password" required/>
                <div class="underline"></div>
              </div>
              <div class="input-box button">
                <input type="submit" name="" value="Submit"/>
              </div>
        </form>
        <div className="flex flex-col items-center">
        <p>OR</p>
        </div>
        <div className="input-box mt-2">
             
             <NavLink to='/Login'>

               <div className="h-[50px]">
               <button >
                    Login
                </button>
               </div>
                    </NavLink>
        </div>
    </div>
</div>

    )
}

export default SignUp;