import { AppContext } from "../Context/AppContext";
import { NavLink, useNavigate } from 'react-router-dom';
import "./login1.css";
import Search from "./Search";

const Login = () =>{

    const navigate = useNavigate(); 

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/');
    }

    return(
    <div class = "container1">
            <div class="container2">
      <form onSubmit={handleSubmit} action="#">
        <div class="title">Login</div>
        <div class="input-box underline">
          <input type="text" placeholder="Enter Your Email" required/>
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Enter Your Password" required/>
          <div class="underline"></div>
        </div>
        

        <div class="input-box button">
          <input type="submit" name="" value="Login"></input>
        </div>
      </form>
      
      <div className="signup flex flex-col items-center">
      <p>OR</p>
        <p>Don't Have an Account</p><div class="sign"></div>
      </div>
       


        <div class="input-box">
             
             <NavLink to='/SignUp'>

                <div className=" h-[50px]">
                <button>
                    SignUp
                </button>
                </div>
                    </NavLink>
        </div>  
    </div>

         

    </div>

    )
}

export default Login;