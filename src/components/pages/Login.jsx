import img3 from "../../assets/japan.jpg";

import React,{useState} from 'react';
import { CiUser, CiLock } from "react-icons/ci";

function Login(){
 
      const [isSignInView, setIsSignInView] = useState(false);
    
      const toggleView = () => {
        setIsSignInView(!isSignInView);
      };
    
      return (
        <div className=" h-screen flex items-center justify-center bg-image">
          <div
            className="bg-[#0000004a]  w-[50%]  h-[80%]  shadow-[4px_4px_15px_black] rounded-[30px] 
                          overflow-hidden flex flex-row m-0 border-none"
          >
            {!isSignInView ? (
              <>
                <div class=" w-full lg:h-[90%] lg:w-1/2 h-full border-none "> 
                <form class="flex flex-col justify-center items-center w-full h-full"> 
                  <h1 class="text-4xl  text-white mt-32 font-extrabold">Sign up</h1> 
                  <div class="flex flex-col justify-center items-center w-full p-10 mt-5 h-full gap-3 ">
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="First Name"
                        className="w-full text-white font-extrabold border-2 border-gray-400 rounded-md lg:p-2 bg-inherit outline-none"
                      ></input>
     
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last Name"
                        className="w-full  text-white font-extrabold  border-2 border-gray-400 rounded-md lg:p-2 bg-inherit outline-none"
                      ></input>
    
                      <input
                        type="text"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full  text-white font-extrabold  border-2 border-gray-400 rounded-md  lg:p-2 bg-inherit outline-none"
                      ></input>
    
                      <input
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        className="w-full  text-white font-extrabold  border-2 border-gray-400 rounded-md lg:p-2 bg-inherit outline-none"
                      ></input>
    
                      <div className="flex relative left-0 w-full mt-7">
                        <input type="checkbox" name="check" required></input>
                        <label className="ml-2 text-white font-extrabold">
                          Accept the Terms & Conditions
                        </label>
                      </div>
    
                      <button className="bg-white w-full rounded-lg p-2 font-extrabold">
                        Join us →
                      </button>
                      <p className="mt-5 text-sm">or</p>
                   
                    </div>
                  </form>
                </div>
    
                <div className=" w-[50%] rounded-3xl overflow-hidden relative p-0 m-0 flex justify-center bg-[#121212b0]">
                  
                  <h1 className="text-white z-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-60 text-center text-5xl ">
                    Already have an account?
                  </h1>
                
                    <button className="w-[50%] z-10 absolute top-3/4 bg-white rounded-lg p-1 text-[2rem] font-bold
                    shadow-[2px_2px_5px_]" onClick={toggleView}>Sign in</button>
                </div>
              </>
            ) : (
              <>
                <div className=" w-[50%] rounded-3xl overflow-hidden relative p-0 m-0 flex justify-center bg-[#121212b0]">
                  
                  <h1 className="text-white z-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-60 text-center text-5xl ">
                    Create your Account
                  </h1>
                    <button className="w-[50%] z-10 absolute top-3/4 bg-white rounded-lg p-1 text-[2rem] font-bold
                    shadow-[2px_2px_5px_]" onClick={toggleView}>Sign up</button>
                </div>
    
                <div className="w-[50%] h-[100%] border-none">
                  <form className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-4xl font-bold text-black mt-14">Sign in</h1>
                    <div className="flex flex-col justify-center items-center w-full  p-10 mt-10">
    
                      <input
                        type="text"
                        name="email"
                        required
                        placeholder="Email Address" 
                        className="w-full border-2 border-gray-400 rounded-md p-2 mt-5 bg-inherit text-white font-extrabold outline-none"
                      ></input>
    
                      <input
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        className="w-full border-2 border-gray-400 rounded-md p-2 mt-5  bg-inherit text-white font-extrabold outline-none"
                      ></input>

                      <button className="bg-white text-black w-full rounded-lg p-2 mt-8 font-extrabold">
                        Sign in →
                      </button>
                    </div>
                    <a href='https://en.wikipedia.org/wiki/SpongeBob_SquarePants'>
                      <img src="./src/assets/spongeBob.gif" className="w-[300px]"></img>
                    </a>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      );
    }
    export default Login;
    