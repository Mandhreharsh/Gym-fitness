import React from 'react';
import Signupform from './Signupform';
import Loginform from './Loginform';


const Login = ({formtype, setIsLoggedIn}) => {


    return (
        <div>
            <div className="LoginMainSection w-full h-screen flex justify-center items- bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d]">
                <div className="LoginSubSection bg-white w-[1200px] h-[600px] mt-[60px] bg-aa bg-cover bg-no-repeat rounded-xl shadow-xl shadow-black flex justify-between">
                    <div className="LoginSubSection1 bg-bla w-9/12 h-[600px] flex justify-center items-center">
                        <div className='LoginSubSection11 h-[200px] bg-blac '>
                            <h1 className="Logintxt text-[#D6D1CC]  text-[70px] leading-[80px] oswald">WELCOME TO!</h1>

                            <h1 className="Logintxt text-[#D6D1CC]  text-[70px] leading-[80px] oswald text-center">FITNESS</h1>
                        </div>
                    </div>

                    <div className="LoginSubSection2 bg-whit backdrop-blur-[20px] w-[470px] h-[600px] flex justify-center items-center">
                        {
                            formtype === "signup" ? (<Signupform setIsLoggedIn={setIsLoggedIn} />) : (<Loginform setIsLoggedIn={setIsLoggedIn} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;